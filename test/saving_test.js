const assert = require('assert');
const MarioChar=require('../models/marioChar')

describe('Saving record',function(){

    //create test
    it('saving record to DB',function(done){
       var char =new MarioChar({
           name:'Deen'
       });


       char.save().then(function(){
           done();
       });

      
    });
    
});