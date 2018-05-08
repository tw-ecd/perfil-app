const mongoose = require('mongoose');
const winston = require('winston');
const Person = require('../models/person.model');

var person = new Person({
    _id: '012345',
    name: 'John Wayne',
    email: 'foo@bar.com',
    company: 'tw',
    role: 'boss',
    function: 'animal',
    profile: 'Mestra dos Números'
});

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/auras').then(() => { 
    winston.log('info', 'Connected to database');
    person.save().then(
        (result) => {
            winston.log('info', result._doc);
            mongoose.connection.close();
        },
        (err) => {
            winston.log('error', err);
        });
});
