var mongoose=require('mongoose');

var users=mongoose.model('users',{
  email:{
    type:String,
    require:true,
    minlength:1,
    trim:true
  }
});

var x='user';

module.exports={
  users,x
};
