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
const Option = require('../../models/option.model');

describe('Questions', () => {

    let app;
    let populateStub, questionStub, optionStub, sortStub;
    let request, mongoResponse, sortedResponse;


    before(() => {
        fakeQuestion = dummy(Question, {ignore: '__v', returnDate: true});
        
        sortStub = {
            sort: sinon.stub(mongoose.Query.prototype, 'sort').callsFake(()=> sortedResponse)
        },
        populateStub = {
            populate: sinon.stub().callsFake(() => mongoResponse)
        },

        questionStub = {
            find: sinon.stub().callsFake(()=> {
                return sortStub;
            }),
            findById: sinon.stub().callsFake(() => {
                return populateStub;
            }),
            findOneAndUpdate: sinon.stub()
        },

        optionStub = {
            create: sinon.stub()
        };

        app = express();
        questionRoute = proxyquire('../../routes/question', {
            '../models/question.model': questionStub,
            '../models/option.model': optionStub
        });
        questionRoute(app);
        request = supertest(app);
    });

    beforeEach(() => {
        populateStub.populate.resetHistory();
        sortStub.sort.resetHistory();
        questionStub.find.resetHistory();
        questionStub.findById.resetHistory();
        questionStub.findOneAndUpdate.resetHistory();
        optionStub.create.resetHistory();
    });

    describe('/GET questions', () => {
        // it('should return all questions in order', (done) => {
        //     let fakeQuestion2 = dummy(Question, {ignore: '__v', returnDate: true});
        //     fakeQuestion2.order = 2;

        //     let fakeQuestion3 = dummy(Question, {ignore: '__v', returnDate: true});
        //     fakeQuestion3.order = 3;
            
        //     let questions = [];
        //     questions.push(fakeQuestion3, fakeQuestion2, fakeQuestion);

        //     let orderedQuestions = [fakeQuestion, fakeQuestion2, fakeQuestion3];
            
        //     sortedResponse = Promise.resolve(orderedQuestions);
        //     questionStub.find.resolves(sortedResponse);

        //     request
        //         .get('/questions')
        //         .expect('Content-Type', /json/)
        //         .expect(200, function (err, res) {
        //             expect(err).to.be.null;
        //             expect(res.body.questions).to.be.an('array');
        //             expect(res.body.quantity).to.be.equal(3);
        //             expect(res.body.questions).to.have.deep.ordered.members(orderedQuestions);
        //             done();
        //         });
        // });

        it('should return one question', (done) => {
            mongoResponse = Promise.resolve(fakeQuestion);
            questionStub.findById.withArgs(2).resolves(mongoResponse);
            
            request
                .get('/questions/2')
                .expect('Content-Type', /json/)
                .end(function (err, res) {
                    expect(err).to.be.null;
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
                    expect(err).to.be.null;
                    expect(res.body).to.haveOwnProperty('options');
                    expect(res.body.options).to.be.an('array');
                    done();
                });
        });
    });

    describe('/POST questions/:id/option', () => {
        it('should add the option to the question', (done) => {
            option = dummy(Option, {ignore: '__v', returnDate: true});
            option.questionId = fakeQuestion._id;
            optionStub.create.resolves(option);
            fakeQuestion.options.push(option._id);
            questionStub.findOneAndUpdate.resolves(fakeQuestion);

            request
                .post('/questions/2/option')
                .send(option)
                .expect('Content-Type', /json/)
                .expect(201)
                .end(function (err, res) {
                    expect(err).to.be.null;
                    expect(res.body.data).to.haveOwnProperty('options');
                    expect(res.body.data.options).to.contain(option._id);
                    done();
                });
        });
    });
});

