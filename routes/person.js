const express = require('express');
const router = express.Router();
const winston = require('winston');
const Person = require('../models/person.model');
const Option = require('../models/option.model');
const Profile = require('../models/profile.model');
const ImageService = require('../services/image.service.js');
const EmailService = require('../services/email.service.js');
const ResultService = require('../services/result.service.js');

router.get('/', (req, res) => {
  res.status(200).json({ message: 'person API OK' });
});

router.get('/:id', (req, res) => {
    Person.findById(req.params.id).then(
        (result) => {
            if (!result) {
                res.status(500).send({ success: false, message: 'Id não encontrado', data: result });
            } else {
                res.json(result);
            }
        }, (err) => {
            res.status(500).send({ success: false, message: 'Erro recuperar item', data: err });
        });
});

router.post('/', function (req, res) {
    var person = new Person(req.body);
    person.save().then(
        (result) => {
            res.status(201).send({ success: true, message: 'Obrigado!', data: result._doc });
        },
        (err) => {
            res.status(500).send({ success: false, message: 'Erro ao salvar os dados. Tente novamente!', data: err });
        });
});

router.get('/:id/results', function (req, res) {
    Person.findById(req.params.id, (err, person) => {
        if (err) {
            winston.error(err);
            res.status(500).send({ success: false, message: 'Erro ao recuperar dados do perfil. Tente novamente!', data: err });
            return;
        }
        try {
            const calculated = new ResultService(person).calculateAuraProfile();

            Profile.findOne({ title: calculated.name }, (err, profile) => {
                calculated.details = profile;
                res.json(calculated);
            });
        } catch (error) {
            res.status(500).send({ success: false, message: 'Erro ao recuperar dados do perfil. Tente novamente!', data: error });
        }
    });
});

router.put('/:id', function (req, res) {

    Person.findById(req.params.id, (err, person) => {

        if (err) {
            winston.error(err);
            res.status(500).send({ success: false, message: 'Erro ao tentar atualizar pessoa. Tente novamente!', data: err });
            return;
        }

        person.name = req.body.name;
        person.email = req.body.email;
        person.company = req.body.company;
        person.role = req.body.role;
        person.function = req.body.function;
        person.wants_emails = req.body.wants_emails;

        try {
            person.profile = new ResultService(person).calculateAuraProfile().name;

            person.save()
                .then((result) => {
                    res.status(200).send({ success: true, message: 'Pessoa atualizada!', data: result });
                    if ((req.body.email !== null) && (req.body._id !== null)) {
                        return new EmailService(req.body).sendIntroEmail();
                    }
                })
                .catch((saveError) => {
                    winston.error(saveError);
                    res.status(500).send({ success: false, message: 'Erro ao tentar atualizar pessoa. Tente novamente!', data: saveError });
                });

        } catch (error) {
            res.status(500).send({ success: false, message: 'Erro ao tentar atualizar pessoa. Tente novamente!', data: error });
            return;
        }


    });
});

router.delete('/:id', function (req, res) {
    Person.remove({ _id: req.params.id }).then(
        (result) => {
            res.status(204).send({ success: true, message: 'Pessoa removida!', data: result });
        },
        (err) => {
            res.status(500).send({ success: false, message: 'Erro ao tentar remover pessoa. Tente novamente!', data: err });
        });
});

router.put('/:id/answer/:optionId', function (req, res) {

    Option.findById(req.params.optionId)
        .populate('questionId')
        .then(
            (option) => {
                addOptionToAnswers(req, option, res);
            },
            (err) => {
                res.status(500).send({ success: false, message: 'Erro ao selecionar resposta', data: err });
            });
});

router.post('/:id/photo', function (req, res) {
    const sendError = function (err) {
        res.status(500).send({ success: false, message: 'Erro ao tentar subir imagem.', data: err });
    };

    const imageService = new ImageService(req.body);

    imageService.uploadImage((err, result) => {
        if (err) {
            sendError(err);
        } else {
            Person.findOneAndUpdate({ _id: req.params.id }, result, {new: true}).then(
                (result) => {
                    return Profile.findOne({ title: result.profile }).exec();
                }, sendError).then(
                (profile) => {
                    result._id = req.params.id;
                    result.text = profile.description;
                    result.profile_identifier = profile.identifier;
                    return new EmailService(result).sendResultEmail();
                }, sendError).then(
                () => {
                    res.status(200).send({ success: true, message: 'Imagem atualizada!', data: result });
                }, sendError);
        }
    });
});

router.get('/photos/:since', (req, res) => {
    var searchQuery = {
        $and: [
            { 'datetime': { $gt: req.params.since } },
            { 'image_permission': true }
        ]
    };

    Person.find(searchQuery, { image_url: 1, profile: 1, datetime: 1 })
        .sort({ 'datetime': -1 })
        .then((result) => {
            res.json(result);
        }, (err) => {
            res.status(500).send({ success: false, message: 'Erro na busca', data: err });
        });
});

module.exports = router;

function addOptionToAnswers(req, option, res) {
    Person.findByIdAndUpdate(req.params.id, {
        $push: {
            answers: {
                question: option.questionId.description,
                option: option.description,
                value: option.value,
                weight: option.questionId.weight,
                typeOf: option.questionId.type
            }
        }
    }).then((result) => {
        if (!result) {
            res.status(500).send({ success: false, message: 'Id não encontrado', data: result });
        }
        else {
            res.status(201).send({ success: true, message: 'Resposta adicionada com sucesso!', data: result });
        }
    }, (err) => {
        res.status(500).send({ success: false, message: '', data: err });
    });
}
