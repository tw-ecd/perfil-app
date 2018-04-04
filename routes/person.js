const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

const PersonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email:
        {
            type: String,
            required: true
        }
},{collection: 'person'});

const Person = mongoose.model('person', PersonSchema);

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

module.exports = router;