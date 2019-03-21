const path = require('path');
const Question = require('../models/question.model');
const Option = require('../models/option.model');
const Profile = require('../models/profile.model');
const seeder = require('mongoose-seed');

seeder.connect(process.env.MONGODB_URI || 'mongodb://localhost/auras', () => {
    seeder.loadModels([
        path.resolve(__dirname, '../models/question.model.js'),
        path.resolve(__dirname, '../models/option.model.js'),
        path.resolve(__dirname, '../models/profile.model.js'),
    ]);

    seeder.clearModels(['question', 'option', 'profile'], function () {

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
    },
    {
        'model': 'profile',
        'documents': []
    }
];

function setQuestion(question, options) {
    const questionModel = new Question(question);

    for (const option of options) {
        const optionModel = new Option(option);
        optionModel.questionId = questionModel._id;

        questionModel.options.push(optionModel);
        data[1].documents.push(optionModel);
    }

    data[0].documents.push(questionModel);
}

function setProfile(title, text, identifier) {
    const profile = new Profile({
        title: title,
        description: text,
        identifier: identifier
    });

    data[2].documents.push(profile);
}

setProfile(
    'Generadora de Interacciones',
    'Crees que las nuevas formas de interacción entre personas y máquinas transformarán la manera en que vivimos y nos relacionamos, creando nuevas posibilidades de compromiso con los consumidores y clientes. Asistentes de voz, ausencia de pantallas e IoT son sólo algunas de las tecnologías que posibilitan este mundo nuevo que deseas crear. ThoughtWorks te puede acompañar en esta jornada, desarrollando software personalizado para que continúes innovando con coraje.',
    'GERADORA_INTERACOES'
);

setProfile(
    'Ingeniera de Tendencias',
    'Eres responsable por crear nuevas formas de interacción entre personas y máquinas, transformando la manera en que vivimos y nos relacionamos. Tus habilidades crean nuevas posibilidades de compromiso con los consumidores y clientes. Con grandes poderes también tienes grandes responsabilidades. ThoughtWorks puede ayudarte a desarrollar estas nuevas tecnologías, garantizando la seguridad y la excelencia técnica, al tiempo que buscamos evitar parcialidades y prejuicios para innovar con responsabilidad.',
    'ENGENHEIRA_HABITOS'
);

setProfile(
    'Formadora de Plataformas',
    'Crees que las plataformas digitales posibilitan la innovación en escala a través del uso estratégico del legado tecnológico de tu organización. Tu pensamiento sistémico es capaz de garantizar la competitividad de un negocio a largo plazo. ThoughtWorks puede ayudarte a eliminar las barreras para habilitar la entrega rápida de nuevos productos y crear diferenciación a través de la tecnología.',
    'FORMADORA_PLATAFORMAS'
);

setProfile(
    'Creadora de posibilidades',
    'Creas plataformas digitales que posibilitan la innovación en escala a través del uso estratégico del legado tecnológico de una organización. Tu conocimiento técnico aliado a tu pensamiento sistémico son capaces de garantizar la competitividad de un negocio a largo plazo. ThoughtWorks te ayuda a eliminar barreras para habilitar la entrega rápida de nuevos productos y crear diferenciación a través de la tecnología.',
    'CRIADORA_POSSIBILIDADES'
);

setProfile(
    'Guardián de los datos',
    'Amas los datos y sabes cómo utilizarlos. Tu curiosidad sólo se satisface cuando te sientes capaz de responder preguntas con hechos y datos. Esta dedicación a la verdad te hace responsable de aprovechar soluciones innovadoras para los desafíos de tu organización. ThoughtWorks puede ayudarte a crear nuevas herramientas que utilicen información y tecnología para generar diferenciación competitiva.',
    'GUARDIA_DADOS'
);

setProfile(
    'Master de los Números',
    'Eres una persona pragmática que cree que los números tienen respuestas. Tu curiosidad sólo se satisface cuando te sientes capaz de desarrollar sistemas que responden preguntas con precisión. Esta dedicación a la verdad te hace responsable por desarrollar soluciones innovadoras para los desafíos de tu organización. ThoughtWorks puede ayudarte a crear nuevas herramientas que utilicen información y tecnología para generar diferenciación competitiva.',
    'MESTRA_NUMEROS'
);

setProfile(
    'Artífice de lo Nuevo',
    'Crees que la innovación necesita ser centrada en la persona usuaria y buscas siempre responder a los desafíos de tu organización pensando en las personas. Tu enfoque en crear nuevas experiencias que respondan a deseos existentes, te posiciona como una persona clave para cualquier empresa que quiera ser competitiva en el futuro. ThoughtWorks puede ayudarte en esta misión de entender las necesidades humanas para crear productos y servicios apasionantes.',
    'CRIADORA_NOVO'
);

setProfile(
    'Agente que cristaliza posibilidades',
    'Innovas siempre pensando en la persona usuaria, respondiendo a los desafíos de tu organización. Tu conocimiento es capaz de crear nuevas experiencias que responden a deseos existentes y te posiciona como una persona clave para cualquier empresa que quiera ser competitiva en el futuro. ThoughtWorks te puede ayudar en esta misión de entender las necesidades humanas para desarrollar productos y servicios apasionantes.',
    'REALIZADORA_POSSIBILIDADES'
);

setProfile(
    'Master de Robots',
    'Crees en la capacidad de los robots de ayudar a las organizaciones a mantenerse competitivas en el presente y en el futuro. La singularidad no es un miedo, sino una oportunidad. Conoces los desafíos de la cooperación entre personas y máquinas y estas dispuesta a liderar ese movimiento. ThoughtWorks puede ayudarte a entender cómo utilizar la tecnología para aprovechar los negocios.',
    'MESTRA_ROBOS'
);

setProfile(
    'Líder de las máquinas',
    'Sabes cómo hacer que las máquinas ayuden a las organizaciones a mantenerse competitivas en el presente y en el futuro. La singularidad no es un miedo, sino una oportunidad. Tu conocimiento te permite crear la cooperación entre personas y máquinas, liderando ese movimiento con ética y responsabilidad. ThoughtWorks puede ayudarte a entender cómo utilizar la tecnología para aprovechar los negocios.',
    'LIDER_MAQUINAS'
);

setQuestion({
    'description': '¿Con cuál de estas macrotendencias tecnológicas te identificas más?',
    'order': 0,
    'options': [],
    'type': 'TREND',
    'weight': 2
},
[{
    'description': 'Evolucionando las interacciones',
    'value': 'EVO_INTER'
},
{
    'description': 'Plataformas como catalizadores',
    'value': 'RISE_PLAT'
},
{
    'description': 'Reconstruyendo la confianza',
    'value': 'SEC_PRIV'
},
{
    'description': 'Antes físico, ahora digital',
    'value': 'HUMAN_AUG'
},
{
    'description': 'Humanidad aumentada',
    'value': 'RISE_ROBOT'
}]
);

setQuestion({
    'description': '¿Cuál de estas tecnologías producirá el mayor impacto en el ecosistema de TI?',
    'order': 1,
    'options': [],
    'type': 'TREND',
    'weight': 1
},
[{
    'description': 'Asistentes de Voz',
    'value': 'EVO_INTER'
},
{
    'description': 'Software as a service (SaaS)',
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

setQuestion({
    'description': '¿Cuál es tu área de acción?',
    'order': 2,
    'type': 'PROFILE',
    'weight': 0.5,
    'options': []
},
[{
    'description': 'Marketing',
    'value': 0.2,
},
{
    'description': 'Tecnología',
    'value': 1.0,
},
{
    'description': 'Personas (Recursos Humanos)',
    'value': 0.0,
},
{
    'description': 'Productos',
    'value': 0.5,
},
{
    'description': 'Compliance',
    'value': 0.7,
}]
);

setQuestion({
    'options': [],
    'description': '¿Cuáles son tus mayores desafíos hoy?',
    'order': 3,
    'type': 'PROFILE',
    'weight': 0.5
},
[{
    'description': 'Actuar de forma ágil',
    'value': 0.5,
},
{
    'description': 'Implementar innovaciones',
    'value': 1.0,
},
{
    'description': 'Generar valor al negocio',
    'value': 0.7,
},
{
    'description': 'Entender nuevas tecnologías',
    'value': 0.3,
},
{
    'description': 'Aprender con la práctica',
    'value': 0.0,
}]
);

setQuestion({
    'options': [],
    'description': '¿Qué sientes ante las transformaciones tecnológicas actuales?',
    'order': 4,
    'type': 'TREND',
    'weight': 0
},
[{
    'description': 'Curiosidad',
    'value': 'Curiosidade'
},
{
    'description': 'Motivación para aprender',
    'value': 'Impulso de aprender'
},
{
    'description': 'Inspiración',
    'value': 'Inspiração'
},
{
    'description': 'Miedo',
    'value': 'Receio'
},
{
    'description': 'Optimismo por las oportunidades',
    'value': 'Oportunidades'
}]
);

/*
setQuestion({
    'options': [],
    'description': 'Diante dessas mudanças, qual o seu maior foco?',
    'order': 5,
    'type': 'PROFILE',
    'weight': 0
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
*/

/*
setQuestion({
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
*/

/*
setQuestion({
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
*/

