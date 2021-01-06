const mongoose =require('mongoose');

var schema = mongoose.Schema

var voteSchema =new schema({
    idvoter:{type:String},
    choice:{type:Boolean},
})
module.exports=mongoose.model('votes',voteSchema);