const mongoose = require('mongoose');
const express = require('express');
const questions = require('../models/question.model');

module.exports = (app) => {
    const router = express.Router();
    
    app.use('/questions', router);

    router.get('/', (req, res) => {
        questions.find().then(
            (result) => {
                res.send({
                    quantity: result.length,
                    questions: result
                });
            }, (err) => {   
                res.send({ success: false, message: 'Erro recuperar questões', data: err });
            });
    });
};