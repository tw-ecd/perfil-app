const mocha = require('mocha');
const chai = require('chai');

const should = chai.should();

describe('First Case', () => {
    it('Should false be equal to false', () => {
        let falsy = false;
        falsy.should.be.false;
    });
});
