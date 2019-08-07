var express=require('express');
var bodyParser=require('body-parser');


const {mongoose}=require('./db/mongoose');
var {toDo}=require('./models/ToDo');
var {user}=require('./models/user');

var app=express();
app.use(bodyParser.json());

app.post('/todo',(req,res)=>{
  var todoData=new toDo({
    text:req.body.text
  });

  todoData.save().then((doc)=>{
    res.send(doc);
  },(e)=>{
    res.send(e);
  })

})


app.listen(3000,()=>{
  console.log('server at 3000');
})


module.exports={app};
