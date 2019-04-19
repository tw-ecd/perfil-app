const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
require('sinon-mongoose');
const mongoose = require('mongoose');
const dummy = require('mongoose-dummy');
const proxyquire = require('proxyquire');
const supertest = require('supertest');
const express = require('express');
const Profile = require('../../models/profile.model');


describe('Profiles', () => {

    let app;
    let profileStub;
    let fakeProfile;
    let request, mongoResponse, sortedResponse;

    before(() => {
        fakeProfile = dummy(Profile, { ignore: ['__v'], returnDate: true });

        profileStub = {
            findOne: sinon.stub()
        };

        app = express();
        profileRoute = proxyquire('../../routes/profile', {
            '../models/profile.model': profileStub
        });
        profileRoute(app);
        request = supertest(app);
    });

    beforeEach(() => {
        profileStub.findOne.resetHistory();
    });

    describe('GET /profiles/:name', () => {
        it('should return one profile', (done) => {
            profileStub.findOne
                .withArgs({ 'title': 'Geradora de Interações' }).resolves(fakeProfile);

            request
                .get('/profiles/Geradora%20de%20Intera%C3%A7%C3%B5es')
                .expect('Content-Type', /json/)
                .end(function (err, res) {
                    expect(err).to.be.null;
                    expect(fakeProfile).to.be.deep.equal(res.body);
                    done();
                });
        });
    });

});