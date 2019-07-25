const assert = require('assert');
const MarioChar=require('../models/marioChar')

describe('Updating record',function(){

    var char;
    beforeEach(function(done){
         char =new MarioChar({
            name:'Deen',
            weight: 50
        });
 
 
        char.save().then(function(){
            done();
        });
    });
    //create test
    it('Updating one record in DB',function(done){
       MarioChar.findOneAndUpdate({name:'Deen'},{name:'Ebrahim'}).then(function(){
           MarioChar.findOne({_id: char._id}).then(function(result){
               assert(result.name === 'Ebrahim');
               done();
           });
       });
    });
    it('Increments the weight by 1 one record in DB',function(done){
        MarioChar.update({},{$inc:{weight: 1 }}).then(function(){
            MarioChar.findOne({name:'Deen'}).then(function(result){
                assert(result.weight===51);
                done();
            });
        });
     });
    
    
});