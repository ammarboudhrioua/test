const mongoose =require('mongoose');

var schema = mongoose.Schema

var userSchema =new schema({

nom:{type:String,required :true},
prenom:{type:String,required :true},
email:{type:String,required :true},
password:{type:String,required :true},
listSujet:{type: mongoose.Schema.Types.ObjectId, ref: 'sujets'},

})
module.exports=mongoose.model('user',userSchema);