var assert = require ('chai').assert;
var addition = require('../src/add');
var addControlelr = require ('../controllers/addController');

describe ('addition test ', function(){
    it('should add 5 and return 10',function(){

        var result  = addition( 5);
        assert.equal( result,10);

    });

});

describe ('addition test different values ', function(){
    it('should add 3 and 3 return 6',function(){

        var result  = addControlelr( 3, 3 );
        assert.equal( result,6);

    });

});