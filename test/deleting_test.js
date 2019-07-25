const assert = require('assert');
const MarioChar=require('../models/marioChar')

describe('Deleteing record',function(){

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
    it('Delete one record frpm DB',function(done){
       
        MarioChar.findOneAndRemove({name:'Deen'}).then(function(){
            MarioChar.findOne({name: 'Deen'}).then(function(result){
                assert(result ===null);
                done();
            });
        });
      
    });
    
    
});