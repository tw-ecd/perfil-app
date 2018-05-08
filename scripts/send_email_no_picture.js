require('dotenv').load();
const mongoose = require('mongoose');
const winston = require('winston');
const Person = require('../models/person.model');
const Profile = require('../models/profile.model');
const EmailService = require('../services/email.service.js');

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
            { 'image_url': { $exists: false } }
        ]
    };

    Person.find(searchQuery)
      .then((result) => {
          result.forEach((person) => {
              Profile.findOne({ title: person.profile })
                .then((profile) => {
                    person.image_url = `https://s3.amazonaws.com/tw-su-auras/profile/${profile.identifier.toLowerCase()}.png`;
                    person.datetime = new Date();
                    person.text = profile.description;
                    person.profile_identifier = profile.identifier;
                    return person;
                }).then(() => {
                    return Person.findOneAndUpdate({ _id: person.id }, person);
                }).then(() => {
                    return new EmailService(person).sendResultEmail();
                }).then(() => {
                    winston.log('info', 'email sent: ' + person.email);
                });
          });
      }, (err) => {
          winston.log('error', 'Erro na busca' + err);
      });
};
