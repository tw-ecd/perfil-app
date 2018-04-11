const mongoose = require('mongoose');
const Person = require('../models/person.model');

var person = new Person({
    _id: '012345',
    name: 'John Wayne',
    email: 'foo@bar.com',
    company: 'tw',
    role: 'boss',
    profile: 'mestra dos dados'
});

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/auras').then(() => { 
    console.log('Connected to database');
    person.save().then(
        (result) => {
            console.log(result._doc);
        },
        (err) => {
            console.log('Erro ao salvar os dados. Tente novamente!');
        });
});
