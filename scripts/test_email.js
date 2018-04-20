require('dotenv').load();
const winston = require('winston');
const EmailService = require('../services/email.service.js');

let user = {
    _id: '14XFCX9',
    email: 'thersan@thoughtworks.com',
    image_url: 'https://s3.amazonaws.com/tw-su-auras/YP1QT1_JG77W0BB.jpg',
    profile: 'Geradora de interações'
};

let emailService = new EmailService(user);

var promise = emailService.sendResultEmail();

promise.then(
    function(data) {
        winston.log('info', data.MessageId);
    }).catch(
    function(err) {
        winston.log('err', err.stack);
    });
