const assert=require('assert');
const mongoose=require('mongoose');
const Author =require('../models/author');
describe('Nesting Records',function(){
    this.beforeEach(function(done){
        mongoose.connection.collections.authors.drop(function(){
           done(); 
        });
    });

    it('creates an auther with sub doc',function(done){
        var pst=new Author({
            name:'Ebrahim',
            books:[{
                title:'Name of the Wind',
                pages:400
            }]
        });
        pst.save().then(function(){
            Author.findOne({name:'Ebrahim'}).then(function(record){
                assert(record.books.length === 1);
                done();
            });
        });
    });

    it('Adds a book to an auther',function(done){
        var pst=new Author({
            name:'Ebrahim',
            books:[{
                title:'Name of the Wind',
                pages:400
            }]
        });

        pst.save().then(function(){
            Author.findOne({name:'Ebrahim'}).then(function(record){
            //add a book to books array
            record.books.push({title:'Wise Menm fear',pages:500});
            record.save().then(function(){
                Author.findOne({name:'Ebrahim'}).then(function(Result){
                    assert(Result.books.length === 2);
                    done();
                });
            });
            });
        });
    });
   
});