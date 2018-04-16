require('dotenv').load();
var AWS = require('aws-sdk');
var fs = require('fs');

var user = { _id: "HAS2J7" };

AWS.config.update({ region: process.env.AWS_REGION });

sendIntroEmail = function() {
  var introHtml = fs.readFileSync('./data/intro.css.html', "utf8");
  var introText = fs.readFileSync('./data/intro.txt', "utf8");

  introHtml = introHtml.replace("{{user._id}}", user._id);
  introText = introText.replace("{{user._id}}", user._id);

  const params = {
    Destination: {
      ToAddresses: [ 'thiago.hersan@gmail.com' ]
    },
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: introHtml
        },
        Text: {
          Charset: "UTF-8",
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
}

var promise = sendIntroEmail();
promise.then(
  function(data) {
    console.log(data.MessageId);
  }).catch(
  function(err) {
    console.error(err, err.stack);
  });
