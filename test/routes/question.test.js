const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
require('sinon-mongoose');
const mongoose = require('mongoose');
const dummy = require('mongoose-dummy');
const proxyquire = require('proxyquire');
const supertest = require('supertest');
const express = require('express');
const Question = require('../../models/question.model');

describe('Questions', () => {

    let app;
    let findStub, findByIdStub, populateStub, questionStub;
    let request, mongoResponse;
    let questions = [];

    before(() => {
        fakeQuestion = dummy(Question, {ignore: '__v', returnDate: true});
        questions.push(fakeQuestion);
        
        populateStub = {
            populate: sinon.stub().callsFake(() => mongoResponse)
        },

        questionStub = {
            find: sinon.stub(),
            findById: sinon.stub().callsFake(() => {
                return populateStub;
            })
        }

        app = express();
        questionRoute = proxyquire('../../routes/question', {
            '../models/question.model': questionStub
        });
        questionRoute(app);
        request = supertest(app);
    });

    beforeEach(() => {
        questionStub.find.resetHistory();
        populateStub.populate.resetHistory();
        questionStub.findById.resetHistory();
      })

    describe('/GET questions', () => {
        it('should return all questions', (done) => {
            questionStub.find.resolves(questions);

            request
                .get('/questions')
                .expect('Content-Type', /json/)
                .expect(200, function (err, res) {
                    expect(res.body.questions).to.be.an('array');
                    expect(res.body.quantity).to.be.equal(1);
                    done();
                });
        });

        it('should return one question', (done) => {
            mongoResponse = Promise.resolve(fakeQuestion);
            questionStub.findById.withArgs(2).resolves(mongoResponse);
            
            request
                .get('/questions/2')
                .expect('Content-Type', /json/)
                .end(function (err, res) {
                    expect(fakeQuestion).to.be.deep.equal(res.body);
                    done();
                });
        });

        it('should have options', (done) => {
            mongoResponse = Promise.resolve(fakeQuestion);
            questionStub.findById.withArgs(2).resolves(mongoResponse);

            request
                .get('/questions/2')
                .expect('Content-Type', /json/)
                .end(function (err, res) {
                    expect(res.body).to.haveOwnProperty('options');
                    expect(res.body.options).to.be.an('array');
                    done();
                });
        });
    });

    describe('/PUT questions/:id/option', () => {
    });
});

