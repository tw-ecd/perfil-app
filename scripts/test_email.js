require('dotenv').load();
const winston = require('winston');
const AWS = require('aws-sdk');
const fs = require('fs');

let user = { _id: 'HAS2J7' };

AWS.config.update({ region: process.env.AWS_REGION });

const sendIntroEmail = function() {
    let introHtml = fs.readFileSync('./data/intro.css.html', 'utf8');
    let introText = fs.readFileSync('./data/intro.txt', 'utf8');

    introHtml = introHtml.replace('{{user._id}}', user._id);
    introText = introText.replace('{{user._id}}', user._id);

    const params = {
        Destination: {
            ToAddresses: [ 'thiago.hersan@gmail.com' ]
        },
        Message: {
            Body: {
                Html: {
                    Charset: 'UTF-8',
                    Data: introHtml
                },
                Text: {
                    Charset: 'UTF-8',
                    Data: introText
                }
            },
            Subject: {
                Charset: 'UTF-8',
                Data: 'Seu Perfil de Pessoa Inovadora'
            }
        },
        Source: '"ThoughtWorks - Inove Com Coragem" <inovecomcoragem@thoughtworks.com>'
    };

    return new AWS.SES({apiVersion: '2010-12-01'}).sendEmail(params).promise();
};

var promise = sendIntroEmail();
promise.then(
    function(data) {
        winston.log('info', data.MessageId);
    }).catch(
    function(err) {
        winston.log('err', err.stack);
    });
