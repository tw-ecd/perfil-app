const mongoose = require('mongoose');
const express = require('express');
const Questions = require('../models/question.model');
const Option = require('../models/option.model');

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

    let bodyParser = require('body-parser')()
    router.post('/:id/option', bodyParser, (req, res) => {

        Option.create({
            description: req.body.description,
            value: req.body.value,
            questionId: req.params.id
        }).then(
            (resultado) => {
                findAndUpdateQuestion(resultado);
            },
            (rejected) => {
                res.status(500).send({ success: false, message: '', data: rejected });
            });

        const findAndUpdateQuestion = (opt) => {
            Questions.findOneAndUpdate(opt.questionId, {
                $push: {
                    options: opt.id
                }
            }).then(
                (result) => {
                    if (!result) {
                        res.status(500).send({ success: false, message: 'Não foi possível adicionar a opção à questão', data: result });
                    }
                    else {
                        res.status(201).send({ success: true, message: 'Opção adicionada com sucesso!', data: result })
                    }
                },
                (err) => {
                    res.status(500).send({ success: false, message: '', data: err });
                });
        }
    });
};