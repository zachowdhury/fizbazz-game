var expect = require ( 'chai').expect;
var should  = require ('chai').should();
var assert = require('assert');

describe ('Simple all pass test ', function (){
    it('Should run Simple test and pass', function (){
        expect(true).to.be.true ;

    });
});


describe('One String Test', function () {
 it('should return number of charachters in a string', function () {
        assert.equal("Hello".length, 5);
    });
 it('should return first charachter of the string', function () {
        assert.equal("Hello".charAt(0), 'H');
        //throw {myError:'throwing error to fail test'}
    });
});