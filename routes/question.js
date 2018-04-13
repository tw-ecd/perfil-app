const mongoose = require('mongoose');
const express = require('express');
const Questions = require('../models/question.model');
require('../models/option.model');

module.exports = (app) => {
    const router = express.Router();

    app.use('/questions', router);

    router.get('/', (req, res) => {
        Questions.find().then(
            (result) => {
                res.json({
                    quantity: result.length,
                    questions: result
                });
            }, (err) => {
                res.send({ success: false, message: 'Erro recuperar questões', data: err });
            });
    });

    router.get('/:id', (req, res) => {
        Questions.findById(req.params.id)
            .populate('options')
            .then(
                (result) => {
                    res.json(result);
                }, (err) => {
                    res.send({ success: false, message: 'Erro recuperar questões', data: err });
                });
    });
};