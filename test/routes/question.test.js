const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
require('sinon-mongoose');
const mongoose = require('mongoose');
const proxyquire = require('proxyquire');
const supertest = require('supertest');
const express = require('express');
const Question = require('../../models/question.model');
const Option = require('../../models/option.model');

const questions = [
    new Question({
        _id: mongoose.Types.ObjectId(),
        description: "pergunta 1",
        order: 1,
        isLast: false,
        options: new Option()
    }),
    new Question({
        _id: mongoose.Types.ObjectId(),
        description: "pergunta 2",
        order: 2,
        isLast: true,
        options: new Option()
    })
];

describe('Questions', () => {

    let app;
    let findStub, findByIdStub, populateStub, questionStub;
    let request, route;
    let mongoResponse;


    before(() => {

        populateStub = {
            populate: sinon.stub().callsFake(() => mongoResponse)
        },

        questionStub = {
            find: sinon.stub(),
            findById: sinon.stub.callsFake(() => {
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
        questionStub.findById.resetHistory();
        populateStub.populate.resetHistory();
      })

    describe('/GET questions', () => {

        it('should return all questions', (done) => {
            questionStub.find.resolves(questions);

            request
                .get('/questions')
                .expect('Content-Type', /json/)
                .expect(200, function (err, res) {
                    expect(res.body.questions).to.be.an('array');
                    expect(res.body.quantity).to.be.equal(2);
                    done();
                });
        });

        // it('should return one question', (done) => {
        //     mongoResponse = Promise.resolve(questions[1]);
        //     questionStub.findById.resolves();
            
        //     request
        //         .get('/questions/2')
        //         .expect('Content-Type', /json/)
        //         .end(function (err, res) {

        //             expect(questions[1]._doc._id.equals(res.body._id)).to.be.true;
        //             expect(res.body.description).to.be.equals(questions[1]._doc.description);
        //             expect(res.body.order).to.be.equals(questions[1]._doc.order);
        //             expect(res.body.isLast).to.be.equals(questions[1]._doc.isLast);

        //             done();
        //         });
        // });

        // it('should have options', (done) => {
        //     findByIdStub.withArgs('2')
        //         // .chain('populate').withArgs('options')
        //         // .chain('exec')
        //         .resolves(questions[1].options);

        //     request
        //         .get('/questions/2')
        //         .expect('Content-Type', /json/)
        //         .end(function (err, res) {
        //             expect(res.body).to.haveOwnProperty('options');
        //             expect(res.body.options).to.be.an('array');
        //             done();
        //         });
        // });
    });


});

