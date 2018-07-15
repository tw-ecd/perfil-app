require('dotenv').load();
const mongoose = require('mongoose');
const winston = require('winston');
const Person = require('../models/person.model');

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
            { 'datetime': { $gte : new Date('2018-07-09') } }
        ]
    };

    Person.find(searchQuery)
        .then((result) => {
            result.forEach((person) => {
                winston.log('info', person.email);
            });
            mongoose.connection.close();
        }, (err) => {
            winston.log('error', 'Erro na busca' + err);
        });
};
