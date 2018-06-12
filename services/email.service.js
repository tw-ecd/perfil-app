const fs = require('fs');
const AWS = require('aws-sdk');

AWS.config.update({ region: process.env.AWS_REGION });

function EmailService(user) {
    this.introHtml = fs.readFileSync('./data/intro.css.html', 'utf8');
    this.introText = fs.readFileSync('./data/intro.txt', 'utf8');

    this.resultHtml = fs.readFileSync('./data/result.css.html', 'utf8');
    this.resultText = fs.readFileSync('./data/result.txt', 'utf8');

    this.sendIntroEmail = function() {
        this.introHtml = this.introHtml.replace('{{user._id}}', user._id);
        this.introText = this.introText.replace('{{user._id}}', user._id);

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

    this.sendResultEmail = function() {
        user.profile_b = user.profile.replace(/([^\s]*)$/, '<b>$1</b>');
        user.href = process.env.CORS_QUIZZ_PROD_ORIGIN + '/auras-app/profile/' +
            user.profile_identifier.toLowerCase() + '/?id=' + user._id;

        this.resultText = this.resultText.replace('{{user.profile}}', user.profile);
        this.resultText = this.resultText.replace('{{user.text}}', user.text);

        this.resultHtml = this.resultHtml.replace(/{{user.profile}}/g, user.profile);
        this.resultHtml = this.resultHtml.replace(/{{user.profile_b}}/g, user.profile_b);
        this.resultHtml = this.resultHtml.replace(/{{user.text}}/g, user.text);
        this.resultHtml = this.resultHtml.replace(/{{user.href}}/g, user.href);
        this.resultHtml = this.resultHtml.replace(/{{user.image_url}}/g, user.image_url);

        const params = {
            Destination: {
                ToAddresses: [ user.email ]
            },
            Message: {
                Body: {
                    Html: {
                        Charset: 'UTF-8',
                        Data: this.resultHtml
                    },
                    Text: {
                        Charset: 'UTF-8',
                        Data: this.resultText
                    }
                },
                Subject: {
                    Charset: 'UTF-8',
                    Data: 'Resultado de Perfil de Pessoa Inovadora'
                }
            },
            Source: '"ThoughtWorks - Inove Com Coragem" <inovecomcoragem@thoughtworks.com>'
        };

        return new AWS.SES({apiVersion: '2010-12-01'}).sendEmail(params).promise();
    };
}

module.exports = EmailService;