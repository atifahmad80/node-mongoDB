var mongoose=require('mongoose');

var toDo=mongoose.model('todo',{
  text:{
    type:String,
    required:true,
    trim:true,
    minlength:1
  },
  complete:{
    type:Boolean,
    default:false
  },
  completeAt:{
    type:Number,
    default:null

  }
});

module.exports={
  toDo
};
