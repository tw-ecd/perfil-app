const chai = require('chai');
const should = chai.should();
const ResultService = require('../../services/result.service');

let personTest = {
    "answers": [
        {
            "_id": "5ad8a25b73067100147b4dc5",
            "question": "Qual dessas características você considera mais relevante em uma líder?",
            "option": "Coragem",
            "value": 0.3,
            "weight": 0,
            "typeOf": "PROFILE"
        },
        {
            "_id": "5ad8a25d73067100147b4dc6",
            "question": "Qual a sua área de atuação?",
            "option": "Tecnologia",
            "value": 0.6,
            "weight": 0.5,
            "typeOf": "PROFILE"
        },
        {
            "_id": "5ad8a25e73067100147b4dc7",
            "question": "Quais são seus maiores desafios atualmente?",
            "option": "Responder com agilidade",
            "value": 0.4,
            "weight": 0.5,
            "typeOf": "PROFILE"
        },
        {
            "_id": "5ad8a26073067100147b4dc8",
            "question": "Diante dessas mudanças, qual o seu maior foco?",
            "option": "Aprender na prática",
            "value": 0.6,
            "weight": 0,
            "typeOf": "PROFILE"
        },
        {
            "_id": "5ad8a26273067100147b4dc9",
            "question": "Como você se sente em relação ao futuro?",
            "option": "Otimista",
            "value": 0,
            "weight": 0,
            "typeOf": "TREND"
        },
        {
            "_id": "5ad8a26373067100147b4dca",
            "question": "Com qual dessas tendências você mais se identifica? ",
            "option": "Crescimento das Plataformas",
            "value": 1,
            "weight": 2,
            "typeOf": "TREND"
        },
        {
            "_id": "5ad8a26473067100147b4dcb",
            "question": "Qual dessas tecnologias produzirá o maior impacto sobre os negócios?",
            "option": "Assistentes de Voz",
            "value": 0,
            "weight": 1,
            "typeOf": "TREND"
        },
        {
            "_id": "5ad8a26673067100147b4dcc",
            "question": "O que você sente diante das transformações tecnológicas atuais?",
            "option": "Receio",
            "value": 3,
            "weight": 0,
            "typeOf": "TREND"
        }
    ],
    "_id": "LXZPTM",
    "name": null,
    "email": null,
    "company": null,
    "role": null,
    "__v": 0
};

describe('Result Service', () => {
    describe('Calculate profile with {[{v: 0.4, w: 0.5}, {v: 0.6, w: 0.5}]}', () => {
        it('should return a weighted average of 0.5', (done) => {
            const service = ResultService(personTest);
            service.calculateProfile().should.be.equal(0.5);
            done();
        });
    });
});