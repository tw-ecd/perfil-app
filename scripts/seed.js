const path = require('path');
const Question = require('../models/question.model');
const Option = require('../models/option.model');
const seeder = require('mongoose-seed');

seeder.connect(process.env.MONGODB_URI || 'mongodb://localhost/auras', () => {
    seeder.loadModels([
        path.resolve(__dirname, '../models/question.model.js'),
        path.resolve(__dirname, '../models/option.model.js')
    ]);

    seeder.clearModels(['question', 'option'], function () {

        seeder.populateModels(data, function () {
            seeder.disconnect();
        });
    });
});


let data = [
    {
        'model': 'question',
        'documents': []
    },
    {
        'model': 'option',
        'documents': []
    }
];

function setData(question, options) {
    const questionModel = new Question(question);

    for (const option of options) {
        const optionModel = new Option(option);
        optionModel.questionId = questionModel._id;

        questionModel.options.push(optionModel);
        data[1].documents.push(optionModel);
    }

    data[0].documents.push(questionModel);
}


setData({
    'description': 'Com qual dessas tendências você mais se identifica? ',
    'order': 0,
    'options': [],
    'type': 'TREND',
    'weight': 2
},
[{
    'description': 'Interações em evolução',
    'value': 'EVO_INTER'
},
{
    'description': 'Crescimento das Plataformas',
    'value': 'RISE_PLAT'
},
{
    'description': 'Segurança, privacidade e transparência',
    'value': 'SEC_PRIV'
},
{
    'description': 'Físico. Agora digital.',
    'value': 'HUMAN_AUG'
},
{
    'description': 'Humanidade aumentada',
    'value': 'RISE_ROBOT'
}]
);

setData({
    'description': 'Qual dessas tecnologias produzirá o maior impacto sobre os negócios?',
    'order': 1,
    'options': [],
    'type': 'TREND',
    'weight': 1
},
[{
    'description': 'Assistentes de Voz',
    'value': 'EVO_INTER'
},
{
    'description': 'SAAS',
    'value': 'RISE_PLAT'
},
{
    'description': 'Blockchain',
    'value': 'SEC_PRIV'
},
{
    'description': 'Biohacking',
    'value': 'HUMAN_AUG'
},
{
    'description': 'Machine Learning',
    'value': 'RISE_ROBOT'
}]
);

setData({
    'options': [],
    'description': 'O que você sente diante das transformações tecnológicas atuais?',
    'order': 2,
    'type': 'TREND',
    'weight': 0
},
[{
    'description': 'Curiosidade',
    'value': 'Curiosidade'
},
{
    'description': 'Impulso de aprender',
    'value': 'Impulso de aprender'
},
{
    'description': 'Inspiração',
    'value': 'Inspiração'
},
{
    'description': 'Receio',
    'value': 'Receio'
},
{
    'description': 'Oportunidades',
    'value': 'Oportunidades'
}]
);

setData({
    'description': 'Diante dessas mudanças, qual o seu maior foco?',
    'order': 3,
    'type': 'PROFILE',
    'weight': 0,
    'options': []
},
[{
    'description': 'Criar coisas novas',
    'value': 'Criar coisas novas'
},
{
    'description': 'Desenvolver habilidades',
    'value': 'Desenvolver habilidades'
},
{
    'description': 'Impulsionar a mudança',
    'value': 'Impulsionar a mudança'
},
{
    'description': 'Aprender na prática',
    'value': 'Aprender na prática'
},
{
    'description': 'Aproveitar possibilidades',
    'value': 'Aproveitar possibilidades'
}]
);

setData({
    'description': 'Qual a sua área de atuação?',
    'order': 4,
    'type': 'PROFILE',
    'weight': 0.5,
    'options': []
},
[{
    'description': 'Marketing',
    'value': 0.2,
},
{
    'description': 'Tecnologia',
    'value': 0.1,
},
{
    'description': 'Pessoas',
    'value': 0.0,
},
{
    'description': 'Produtos',
    'value': 0.5,
},
{
    'description': 'Compliance',
    'value': 0.7,
}]
);


setData({
    'options': [],
    'description': 'Quais são seus maiores desafios atualmente?',
    'order': 5,
    'type': 'PROFILE',
    'weight': 0.5
},
[{
    'description': 'Responder com agilidade',
    'value': 0.5,
},
{
    'description': 'Implementar inovações',
    'value': 1.0,
},
{
    'description': 'Gerar valor ao negócio',
    'value': 0.7,
},
{
    'description': 'Entender a tecnologia',
    'value': 0.3,
},
{
    'description': 'Aprender as linguagens',
    'value': 0.0,
}]
);


setData({
    'options': [],
    'description': 'Como você se sente em relação ao futuro?',
    'order': 6,
    'type': 'TREND',
    'weight': 0
},
[{
    'description': 'Otimista',
    'value': 'Otimista'
},
{

    'description': 'Apreensiva',
    'value': 'Apreensiva'
},
{

    'description': 'Curiosa',
    'value': 'Curiosa'
},
{

    'description': 'Esperançosa',
    'value': 'Esperançosa'
},
{

    'description': 'Assustada',
    'value': 'Assustada',
}]
);

setData({
    'options': [],
    'description': 'Qual dessas características você considera mais relevante em uma líder?',
    'order': 7,
    'type': 'PROFILE',
    'weight': 0
},
[{
    'description': 'Coragem',
    'value': 'Coragem'
},
{
    'description': 'Rebeldia',
    'value': 'Rebeldia'
},
{
    'description': 'Conhecimento técnico',
    'value': 'Conhecimento técnico'
},
{
    'description': 'Adaptabilidade',
    'value': 'Adaptabilidade'
},
{
    'description': 'Empatia',
    'value': 'Empatia'
}]
);


