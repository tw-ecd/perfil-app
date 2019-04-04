const chai = require('chai');
const should = chai.should();
const sinon = require('sinon');
const mongoose = require('mongoose');
require('sinon-mongoose');
const Person = require('../../models/person.model');

describe('People', () => {
    describe('/GET person', () => {
        it('it should return all people', (done) => {
            const personMock = sinon.mock(Person);
            const expectedResult = { status: true, people: [] };
            personMock.expects('find').yields(null, expectedResult);

            Person.find(function (err, result) {
                personMock.verify();
                personMock.restore();
                result.status.should.be.true;
                done();
            });
        });
    });

    describe('/POST person', () => {
        let person = null;
        let personMock = null;
        before(() => {
            personMock = sinon.mock(new Person({
                name: 'test',
                email: 'api-test@tw.com',
                company: 'TW',
                function: 'Desenvolvedora'
            }));
            person = personMock.object;
        });

        it('it should create a new person with at most seven characters on id', (done) => {
            let expectedResult = { status: true, data: person };
            personMock.expects('save').yields(null, expectedResult);

            person.save(function (err, result) {
                personMock.verify();
                personMock.restore();
                result.status.should.be.true;
                result.data.id.length.should.be.at.most(7);
                done();
            });
        });
    });

    describe('/DELETE person', () => {
        it('it should remove the newly created user', (done) => {
            let personMock = sinon.mock(Person);
            let expectedResult = { status: true };
            personMock.expects('remove').withArgs({ _id: 12345 }).yields(null, expectedResult);
            Person.remove({ _id: 12345 }, (err, result) => {
                personMock.verify();
                personMock.restore();
                result.status.should.be.true;
                done();
            });

        });
    });


});