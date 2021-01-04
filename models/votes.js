const mongoose =require('mongoose');

var schema = mongoose.Schema

var voteSchema =new schema({
    choice:{type:Boolean},
})
module.exports=mongoose.model('votes',voteSchema);