const chai = require('chai');
const sinon = require('sinon');
const should = chai.should();
const ResultService = require('../../services/result.service');

let fixture = {
    "answers": [
        {
            "option": "Coragem",
            "value": 'SNKDSDKM',
            "weight": 0,
            "typeOf": "PROFILE"
        },
        {
            "option": "Tecnologia",
            "value": 0.6,
            "weight": 0.5,
            "typeOf": "PROFILE"
        },
        {
            "option": "Responder com agilidade",
            "value": 0.4,
            "weight": 0.5,
            "typeOf": "PROFILE"
        },
        {
            "option": "Aprender na prática",
            "value": 0.6,
            "weight": 0,
            "typeOf": "PROFILE"
        },
        {
            "option": "Otimista",
            "value": 0,
            "weight": 0,
            "typeOf": "TREND"
        },
        {
            "option": "Crescimento das Plataformas",
            "value": 'EVO_INTER',
            "weight": 2,
            "typeOf": "TREND"
        },
        {
            "option": "Assistentes de Voz",
            "value": 'SEC_PRIV',
            "weight": 1,
            "typeOf": "TREND"
        },
        {
            "option": "Receio",
            "value": 3,
            "weight": 0,
            "typeOf": "TREND"
        }
    ]
};

describe('Result Service', () => {
    describe('Calculate profile with {[{v: 0.4, w: 0.5}, {v: 0.6, w: 0.5}]}', () => {

        let service;

        beforeEach(() => {
            service = new ResultService(fixture);
        });

        it('should return a weighted average of 1', (done) => {
            service.calculateProfile().should.be.equal(1);
            done();
        });

        it('should return a weighted result of EVO_INTER', (done) => {
            service.calculateTrend().should.be.equal('EVO_INTER');
            done();
        });

        it('should return GERADORA_INTERACOES as aura profile', (done) => {
            sinon.stub(service, 'calculateTrend').returns('EVO_INTER');
            sinon.stub(service, 'calculateProfile').returns(1);

            service.calculateAuraProfile().identifier.should.be.equal('GERADORA_INTERACOES');
            service.calculateAuraProfile().trend.should.be.equal('EVO_INTER');
            service.calculateAuraProfile().profile.should.be.equal(1);
            done();
        });

        it('should return CRIADORA_POSSIBILIDADES as aura profile when get RISE_PLAT and Profile is 0', (done) => {
            sinon.stub(service, 'calculateTrend').returns('RISE_PLAT');
            sinon.stub(service, 'calculateProfile').returns(0);

            service.calculateAuraProfile().identifier.should.be.equal('CRIADORA_POSSIBILIDADES');
            service.calculateAuraProfile().trend.should.be.equal('RISE_PLAT');
            service.calculateAuraProfile().profile.should.be.equal(0);
            done();
        });
        
        it('should return CRIADORA_NOVO as aura profile when get HUMAN_AUG and Profile is 1', (done) => {
            sinon.stub(service, 'calculateTrend').returns('HUMAN_AUG');
            sinon.stub(service, 'calculateProfile').returns(1);

            service.calculateAuraProfile().identifier.should.be.equal('CRIADORA_NOVO');
            service.calculateAuraProfile().trend.should.be.equal('HUMAN_AUG');
            service.calculateAuraProfile().profile.should.be.equal(1);

            done();
        });
    });
});