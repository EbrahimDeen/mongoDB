const assert = require('assert');
const MarioChar=require('../models/marioChar')

describe('Finding record',function(){

    var char;
    beforeEach(function(done){
         char =new MarioChar({
            name:'Deen'
        });
 
 
        char.save().then(function(){
            done();
        });
    });
    //create test
    it('Finding one record frpm DB',function(done){
       
        MarioChar.findOne({name:'Deen'}).then(function(result){
            assert(result.name==='Deen');
            done();
        });
      
    });
    it('Finding one record by id from DB',function(done){
       
        MarioChar.findOne({_id:char._id}).then(function(result){
            assert(result._id.toString() === char._id.toString());
            done();
        });
      
    });
    
});