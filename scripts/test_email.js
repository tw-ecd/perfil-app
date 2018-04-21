require('dotenv').load();
const winston = require('winston');
const EmailService = require('../services/email.service.js');

const user = {
    _id: '1AU15T2',
    email: 'thersan@thoughtworks.com',
    image_url: 'https://s3.amazonaws.com/tw-su-auras/YP1QT1_JG77W0BB.jpg',
    profile: 'Geradora de Interações',
    text: 'Você...'
};

const emailService = new EmailService(user);

/*
var intro = emailService.sendIntroEmail();
intro.then(
    function(data) {
        winston.log('info', data.MessageId);
    }).catch(
    function(err) {
        winston.log('err', err.stack);
    });
*/

var result = emailService.sendResultEmail();
result.then(
    function(data) {
        winston.log('info', data.MessageId);
    }).catch(
    function(err) {
        winston.log('err', err.stack);
    });
