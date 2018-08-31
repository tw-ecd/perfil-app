require('dotenv').load();
const mongoose = require('mongoose');
const download = require('download-file');
const winston = require('winston');
const Person = require('../models/person.model');

const PROFILE_DIR = {
    'Criadora de Possibilidades': 'CRIA_POSS',
    'Criadora do Novo': 'NOVO',
    'Engenheira de Hábitos': 'HABITOS',
    'Formadora de Plataformas': 'PLATAFORMAS',
    'Geradora de Interações': 'INTERACOES',
    'Guardiã dos Dados': 'DADOS',
    'Líder das Máquinas': 'MAQUINAS',
    'Mestra de Robôs' : 'ROBOS',
    'Mestra dos Números': 'NUMEROS',
    'Realizadora de Possibilidades': 'REALIZA_POSS'
};

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/auras')
    .then(() => { 
        winston.log('info', 'Connected to database');
        findNoPicture();
    }, (err) => {
        winston.log('error', 'erro ao abrir db: ' + err);
    });

var findNoPicture = function() {
    var searchQuery = {
        $and: [
            { 'email': { $ne: null } },
            { 'datetime': { $gte : new Date('2018-08-23') } }
        ]
    };

    Person.find(searchQuery)
        .then((result) => {
            result.forEach((person) => {
                const options = {
                    directory: './out/BV/' + PROFILE_DIR[person.profile] + '/',
                    filename: person._id + '.jpg'
                };
                download(person.image_url, options, function(err){
                    if (err) throw err;
                });
                // winston.log('info', person);
            });
            mongoose.connection.close();
        }, (err) => {
            winston.log('error', 'Erro na busca' + err);
        });
};
