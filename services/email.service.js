var AWS = require('aws-sdk');
var fs = require('fs');

AWS.config.update({ region: process.env.AWS_REGION });

function EmailService(user) {
    this.introHtml = fs.readFileSync('./data/intro.css.html', 'utf8');
    this.introText = fs.readFileSync('./data/intro.txt', 'utf8');

    this.introHtml = this.introHtml.replace('{{user._id}}', user._id);
    this.introText = this.introText.replace('{{user._id}}', user._id);

    this.sendIntroEmail = function() {
        const params = {
            Destination: {
                ToAddresses: [ user.email ]
            },
            Message: {
                Body: {
                    Html: {
                        Charset: 'UTF-8',
                        Data: this.introHtml
                    },
                    Text: {
                        Charset: 'UTF-8',
                        Data: this.introText
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
}

module.exports = EmailService;