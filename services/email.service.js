var AWS = require('aws-sdk');

AWS.config.update({ region: process.env.AWS_REGION });

function EmailService(user) {

  this.introHtml = `
<h2 style="font-weight: 100;">
  Olá <b>${user.name}</b>
</h2>

<p>Bem vinda à Auras: a experiência da ThoughtWorks durante a Singularity University Summit 2018.</p>

<p>Calculamos que o seu perfil de pessoa inovadora é: <b>${user.profile}</b></p>

<p>Para continuar a experiência e descubrir mais sobre o seu perfil use esse código no nosso estande durante o evento:</p>

<h1>${user._id}</h1>
`;

  this.sendIntroEmail = function() {
    const params = {
      Destination: {
        ToAddresses: [ user.email ]
      },
      Message: {
        Body: {
          Html: {
            Charset: "UTF-8",
            Data: this.introHtml
          }
        },
        Subject: {
          Charset: 'UTF-8',
          Data: 'Seu Perfil de Pessoa Inovadora'
        }
      },
      Source: 'inovecomcoragem@thoughtworks.com',
      ReplyToAddresses: [ 'thersan@thoughtworks.com' ]
    };

    return new AWS.SES({apiVersion: '2010-12-01'}).sendEmail(params).promise();
  }
}

module.exports = EmailService;