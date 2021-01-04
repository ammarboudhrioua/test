const mongoose =require('mongoose');

var schema = mongoose.Schema

var sujetSchema =new schema({

titre:{type:String,required :true},
description:{type:String,required :true},
date:{type:Date},
result:{type:Number},
votes:{type: mongoose.Schema.Types, ref: 'votes'},

})
module.exports=mongoose.model('sujet',sujetSchema);