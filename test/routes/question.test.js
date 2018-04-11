const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
require('sinon-mongoose');
const proxyquire = require('proxyquire');
const supertest = require('supertest');
const express = require('express');

const resultJson = {
    quantity: 2,
    questions: [
        {
            description: "pergunta 1",
            order: 1,
            isLast: false
        },
        {
            description: "pergunta 2",
            order: 2,
            isLast: true
        }
    ]
};

describe('Questions', () => {
    describe('/GET questions', () => {
        let app, findStub, request, route;

        beforeEach(() => {
            findStub = sinon.stub();
            app = express();
            questionRoute = proxyquire('../../routes/question', {
                '../models/question.model' : {
                    find: findStub
                }
            });
            questionRoute(app);
            request = supertest(app);
        });

        it('it should return all questions', (done) => {
            findStub.resolves(resultJson);

            request
                .get('/questions')
                .expect('Content-Type', /json/)
                .expect(200, function(err, res) {
                    expect(res.body.questions).to.deep.equal(resultJson);
                });
                done();
        });
    });

    
});

