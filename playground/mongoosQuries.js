const {ObjectID}=require('mongodb');

const {mongoose}=require('./../server/db/mongoose');
const {toDo}=require('./../server/models/Todo');
const {users}=require('./../server/models/user')

// var id='5d4aaf6473babd2fbc7955d7';
var id='5d4a62c9f191e01f848c9bb3';


// if(!ObjectID.isValid(id)){
//   return  console.log('invalid id');
// }


// toDo.find({
//   _id: id
// }).then((todos)=>{
//   console.log(todos);
// })
//
// toDo.findOne({
//   _id:id
// }).then((todo)=>{
//   console.log(todo);
// })

// toDo.findById({
//   _id:id
// }).then((todo)=>{
//   if (!todo) {
//     return console.log("Not Found");
//   }
//   console.log(todo);
// }).catch((e)=>{
//   console.log(e);
// })

// users.findById({
//   _id:id
// }).then((res)=>{
//   if (!res) {
//     return console.log('not found');
//   }
//   console.log(res);
// }).catch((err)=>{
//   console.log(err);
// })

users.findById({
  _id:id
}).then((res)=>{
  if (!res) {
    return  console.log('not found');
  }
  console.log(res);
},(e)=>{
  console.log('invalid id');
})
