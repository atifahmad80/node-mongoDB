const {MongoClient,ObjectID}= require("mongodb");

const {mongoose}=require('./../server/db/mongoose');
const {toDo}=require('./../server/models/Todo');
const {users}=require('./../server/models/user');

// toDo.remove({}).then((res)=>{
//   console.log(res);
// })



toDo.findByIdAndRemove('5d4bbd15acd0c861a31d3e82').then((res)=>{
  console.log(res);
})
