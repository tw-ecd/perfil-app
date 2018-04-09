const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const Feeling = require('../models/feeling.model');

router.get('/', (req, res) => {
    Feeling.find().then(
        (result) => {
            res.json(result);
        }, (err) => {   
            res.send({ success: false, message: 'Erro recuperar item', data: err });
        });
});

router.get('/:id', (req, res) => {
    Feeling.findById(req.params.id).then(
        (result) => {
            res.json(result);
        }, (err) => {   
            res.status(500)({ success: false, message: 'Erro recuperar item', data: err });
        });
});

module.exports = router;