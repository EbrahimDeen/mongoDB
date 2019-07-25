const mongoose=require('mongoose');


//ES6 promisse

mongoose.Promise=global.Promise;
//connect to the db before tests run

before(function(done){
    //coonect to db
    mongoose.connect('mongodb://localhost/testaroo');

    mongoose.connection.once('open',function(){
        console.log('connection has been made ');
        done();
    }).on('error',function(error){
        console.log('connection error : ', error);
    });
});

//drop the colllection before each test
beforeEach(function(done){
    //drop the collection
    mongoose.connection.collections.mariochars.drop(function(){
        done();
    });
});


