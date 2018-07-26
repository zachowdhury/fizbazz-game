var assert = require ('chai').assert;
var addition = require('../src/add');

describe ('addition test ', function(){
    it('should add 5 and return 10',function(){

        var result  = addition( 5);
        assert.equal( result,10);

    });

});