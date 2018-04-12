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
            _id: 1,
            description: "pergunta 1",
            order: 1,
            isLast: false
        },
        {
            _id: 2,
            description: "pergunta 2",
            order: 2,
            isLast: true
        }
    ]
};

describe('Questions', () => {

    let app, findStub, findByIdStub, request, route;

    beforeEach(() => {
        findStub = sinon.stub();
        findByIdStub = sinon.stub();
        app = express();
        questionRoute = proxyquire('../../routes/question', {
            '../models/question.model': {
                find: findStub,
                findById: findByIdStub
            }
        });
        questionRoute(app);
        request = supertest(app);
    });

    describe('/GET questions', () => {


        it('should return all questions', (done) => {
            findStub.resolves(resultJson);

            request
                .get('/questions')
                .expect('Content-Type', /json/)
                .expect(200, function (err, res) {
                    expect(res.body.questions).to.deep.equal(resultJson);
                    done();
                });
        });

        it('should return one question', (done) => {
            findByIdStub.withArgs('2').resolves(resultJson.questions[1]);

            request
                .get('/questions/2')
                .expect('Content-Type', /json/)
                .end(function (err, res) {
                    expect(res.body).to.deep.equal(resultJson.questions[1]);
                    done();
                });
        });
    });


});

