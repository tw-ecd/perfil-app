const chai = require('chai');
const should = chai.should();
const sinon = require('sinon');
const mongoose = require('mongoose');
require('sinon-mongoose');
const Question = require('../../models/question.model');

const resultJson = {
    quantity: 1, 
    questions: [
    {
        description: "pergunta",
        order: 1,
        isLast: true
    }
]};

describe('Questions', () => {
    describe('/GET questions', () => {
        it('it should return all questions', (done) => {
            const questionMock = sinon.mock(Question);
            const expectedResult = { status: true, data: resultJson};

            questionMock.expects('find').yields(null, expectedResult);
            Question.find(function (err, result) {
                questionMock.verify();
                questionMock.restore();
                result.status.should.be.true;
                result.data.questions.should.be.an('array');
                result.data.quantity.should.be.equal(1);
                done();
            });
        });
    });
});

