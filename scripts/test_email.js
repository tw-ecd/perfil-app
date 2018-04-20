require('dotenv').load();
const winston = require('winston');
const EmailService = require('../services/email.service.js');

let user = {
    _id: '14XFCX9',
    email: 'thersan@thoughtworks.com',
    image_url: 'https://s3.amazonaws.com/tw-su-auras/YP1QT1_JG77W0BB.jpg',
    profile: 'Geradora de interações',
    href: 'https://caiobsouza.github.io/su-auras/result/14XFCX9',
    text: 'Você acredita que as novas formas de interação entre pessoas e máquinas vai transformar a maneira como vivemos e nos relacionamos, criando novas possibilidades de engajamento para as marcas. Assistentes de voz, ausência de telas e IoT são só algumas das tecnologias que possibilitam esse mundo novo que você quer criar. A ThoughtWorks pode te acompanhar nessa jornada, desenvolvendo softwares personalizados para que você continue inovando com coragem.',
    avatar_url: ''
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
