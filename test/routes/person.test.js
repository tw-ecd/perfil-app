
const mongoose = require("mongoose");
const Person = require('../../routes/person');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../index');
const should = chai.should();

chai.use(chaiHttp);

let personObject = {
    name: "teste",
    email: "t@t.com"
};

describe('People', () => {
    describe('/GET person', () => {
        it('it should return all people on database', (done) => {
          chai.request(server)
              .get('/person')
              .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('array');
                done();
              });
        });
    });

    describe('/POST person', () => {
        it('it should create a new person on database', (done) => {
          chai.request(server)
              .post('/person')
              .send(personObject)
              .end((err, res) => {
                  res.should.have.status(201);
                  res.body.should.be.a('object');
                  res.body.should.have.property('success');
                  res.body.should.have.property('data');
                  res.body.should.have.property('message');
                  res.body.success.should.be.true;
                done();
              });
        });
    });
});