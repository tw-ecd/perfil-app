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
]

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
    "description": "Com qual dessas tendências você mais se identifica? ",
    "order": 5,
    "options": [],
    "type": "TREND",
    "weight": 2
},
    [{
        "description": "Interações em evolução",
        "value": 0
    },
    {
        "description": "Crescimento das Plataformas",
        "value": 1
    },
    {
        "description": "Segurança, privacidade e transparência",
        "value": 2
    },
    {
        "description": "Físico. Agora digital.",
        "value": 3
    },
    {
        "description": "Humanidade aumentada",
        "value": 4
    }]
);



setData({
    "description": "Qual dessas tecnologias produzirá o maior impacto sobre os negócios?",
    "order": 6,
    "options": [],
    "type": "TREND",
    "weight": 1
},
    [{
        "description": "Assistentes de Voz",
        "value": 0
    },
    {
        "description": "SAAS",
        "value": 1
    },
    {
        "description": "Blockchain",
        "value": 2
    },
    {
        "description": "Biohacking",
        "value": 3
    },
    {
        "description": "Machine Learning",
        "value": 4
    }]
);

setData({
    "description": "Qual a sua área de atuação?",
    "order": 1,
    "type": "PROFILE",
    "weight": 0.5,
    "options": []
},
    [{
        "description": "Marketing",
        "value": 0.2,
    },
    {
        "description": "Tecnologia",
        "value": 0.1,
    },
    {
        "description": "Pessoas",
        "value": 0.0,
    },
    {
        "description": "Produtos",
        "value": 0.5,
    },
    {
        "description": "Compliance",
        "value": 0.7,
    }]
);


setData({
    "options": [],
    "description": "Quais são seus maiores desafios atualmente?",
    "order": 2,
    "type": "PROFILE",
    "weight": 0.5
},
    [{
        "description": "Responder com agilidade",
        "value": 0.5,
    },
    {
        "description": "Implementar inovações",
        "value": 1.0,
    },
    {
        "description": "Gerar valor ao negócio",
        "value": 0.7,
    },
    {
        "description": "Entender a tecnologia",
        "value": 0.3,
    },
    {
        "description": "Aprender as linguagens",
        "value": 0.0,
    }]
);


setData({
    "options": [],
    "description": "Como você se sente em relação ao futuro?",
    "order": 4,
    "type": "TREND",
    "weight": 0
},
    [{
        "description": "Otimista",
        "value": 0,
    },
    {

        "description": "Apreensiva",
        "value": 1,
    },
    {

        "description": "Curiosa",
        "value": 2,
    },
    {

        "description": "Esperançosa",
        "value": 3,
    },
    {

        "description": "Assustada",
        "value": 4,
    }]
);


setData({
    "options": [],
    "description": "O que você sente diante das transformações tecnológicas atuais?",
    "order": 7,
    "type": "TREND",
    "weight": 0
},
    [{
        "description": "Curiosidade",
        "value": 0,
    },
    {
        "description": "Impulso de aprender",
        "value": 1
    },
    {
        "description": "Inspiração",
        "value": 2
    },
    {
        "description": "Receio",
        "value": 3
    },
    {
        "description": "Oportunidades",
        "value": 4
    }]
);

setData({
    "options": [],
    "description": "Qual dessas características você considera mais relevante em uma líder?",
    "order": 0,
    "type": "PROFILE",
    "weight": 0
},
    [{
        "description": "Coragem",
        "value": 0.3
    },
    {
        "description": "Rebeldia",
        "value": 0.4
    },
    {
        "description": "Conhecimento técnico",
        "value": 0.5
    },
    {
        "description": "Adaptabilidade",
        "value": 0.6
    },
    {
        "description": "Empatia",
        "value": 0.7
    }]
);

setData({
    "description": "Diante dessas mudanças, qual o seu maior foco?",
    "order": 3,
    "type": "PROFILE",
    "weight": 0,
    "options": []
},
    [{
        "description": "Criar coisas novas",
        "value": 0.3
    },
    {
        "description": "Desenvolver habilidades",
        "value": 0.4
    },
    {
        "description": "Impulsionar a mudança",
        "value": 0.5
    },
    {
        "description": "Aprender na prática",
        "value": 0.6
    },
    {
        "description": "Aproveitar possibilidades",
        "value": 0.7
    }]
);
