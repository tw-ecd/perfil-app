process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let Person = require('../../routes/person');

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../../index');
let should = chai.should();

chai.use(chaiHttp);

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
});