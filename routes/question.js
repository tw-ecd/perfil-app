const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const Question = require('../models/question.model');

router.get('/', (req, res) => {
    Question.find().then(
        (result) => {
            res.send({
                quantity: result.length,
                questions: result
            });
        }, (err) => {   
            res.send({ success: false, message: 'Erro recuperar questões', data: err });
        });
});

module.exports = router;