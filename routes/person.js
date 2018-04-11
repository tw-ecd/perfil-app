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
            res.send({ success: false, message: 'Erro recuperar item', data: err });
        });
});

router.get('/:id', (req, res) => {
    Person.findById(req.params.id).then(
        (result) => {
            res.json(result);
        }, (err) => {
            res.send({ success: false, message: 'Erro recuperar item', data: err });
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
    let person = new Person(req.body);

    Person.findOneAndUpdate(req.params.id, {
        name: req.body.name,
        email: req.body.email,
        company: req.body.company,
        role: req.body.role
    },
        (result) => {
            res.status(200).send({ success: true, message: 'Pessoa atualizada!', data: result })
        },
        (err) => {
            res.status(500).send({ success: false, message: 'Erro ao tentar atualizar pessoa. Tente novamente!', data: err });
        });
});

router.delete('/:id', function (req, res) {
    Person.remove({ _id: req.params.id },
        (result) => {
            res.status(204).send({ success: true, message: 'Pessoa removida!', data: result })
        },
        (err) => {
            res.status(500).send({ success: false, message: 'Erro ao tentar remover pessoa. Tente novamente!', data: err });
        });
});

router.post('/:id/photo', function(req, res) {
    console.log('from post');

    var flickerService = new FlickrService(req.body);
    flickerService.updatePersonData(function(err, data) {
        if(err) {
            res.status(500).send({ success: false, message: 'Erro ao tentar atualizar imagem.', data: err });
        } else {
            console.log(data);
            res.status(200).send({ success: true, message: 'Imagem atualizada!', data: data })
        }
    });
});

module.exports = router;