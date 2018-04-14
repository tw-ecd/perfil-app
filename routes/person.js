const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const Person = require('../models/person.model');
const FlickrService = require('../services/flickr.service');

router.get('/', (req, res) => {
    Person.find().then(
        (result) => {
            res.json(result);
        }, (err) => {
            res.status(500).send({ success: false, message: 'Erro recuperar item', data: err });
        });
});

router.get('/:id', (req, res) => {
    Person.findById(req.params.id).then(
        (result) => {
            if(!result) {
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
            res.status(201).send({ success: true, message: 'Obrigado!', data: result._doc })
        },
        (err) => {
            res.status(500).send({ success: false, message: 'Erro ao salvar os dados. Tente novamente!', data: err });
        });
});

router.put('/:id', function (req, res) {
    Person.findOneAndUpdate({ _id: req.params.id }, {
        name: req.body.name,
        email: req.body.email,
        company: req.body.company,
        role: req.body.role
    }).then(
        (result) => {
            res.status(200).send({ success: true, message: 'Pessoa atualizada!', data: result })
        },
        (err) => {
            res.status(500).send({ success: false, message: 'Erro ao tentar atualizar pessoa. Tente novamente!', data: err });
        });
});

router.delete('/:id', function (req, res) {
    Person.remove({ _id: req.params.id }).then(
        (result) => {
            res.status(204).send({ success: true, message: 'Pessoa removida!', data: result })
        },
        (err) => {
            res.status(500).send({ success: false, message: 'Erro ao tentar remover pessoa. Tente novamente!', data: err });
        });
});

router.post('/:id/photo', function(req, res) {
    const sendError = function(err) {
        res.status(500).send({ success: false, message: 'Erro ao tentar subir imagem.', data: err });
    }

    const flickerService = new FlickrService(req.body);

    flickerService.uploadImage().then(
        (result) => {
            Person.findOneAndUpdate({ _id: req.params.id }, result).then(
                (result) => {
                    res.status(200).send({ success: true, message: 'Imagem atualizada!', data: result })
                }, sendError);
        }, sendError);
});

router.get('/photos/:since', (req, res) => {
    var searchQuery = {
        $and: [
            { "datetime" : { $gt : req.params.since } },
            { "accepted_conditions" : true }
        ]
    };

    Person.find(searchQuery, { flickr_url: 1, profile: 1, datetime: 1 })
        .sort({ "datetime" : -1 })
        .then((result) => {
            res.json(result);
        }, (err) => {
            res.status(500).send({ success: false, message: 'Erro na busca', data: err });
        });
});

module.exports = router;