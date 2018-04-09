const Feeling = require('../../models/feeling.model');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../index');
const should = chai.should();

chai.use(chaiHttp);

let feeling = new Feeling({
    name: 'Otimista',
    colors: ['#F0FFFF',
        '#FFA07A'
    ],
    active: true
});

describe('Feelings', () => {

    describe('/GET feeling', () => {
        it('it should return all feelings on database', (done) => {
            chai.request(server)
                .get('/feeling')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    done();
                });
        });
    });

});