var express=require('express');
var bodyParser=require('body-parser');
var {ObjectID}=require('mongodb');

const {mongoose}=require('./db/mongoose');
var {toDo}=require('./models/ToDo');
var {user}=require('./models/user');

const port=process.env.PORT || 3000;


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

app.get('/todo',(req,res)=>{
  toDo.find().then((todoslist)=>{
    res.send({todoslist});
  },(e)=>{
    res.status(400).send(e);
  })
})


app.get('/todo/:id',(req,res)=>{
  var id=req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }
  // res.status(200).send(id);

  toDo.findById(id).then((succ)=>{
    if (!succ) {
      return res.status(404).send('not found');
    }
    res.status(200).send({succ})
  },(err)=>{
    res.status(400).send();
  })
})

app.delete('/todo/:id',(req,res)=>{
  var id=req.params.id;
  if (!ObjectID.isValid(id)) {
    return res.status(404).send('invalid id');
  }

  toDo.findByIdAndRemove(id).then((succ)=>{
    if(!succ){
      return res.status(404).send('no data');
    }
    res.status(200).send({succ});
  },(err)=>{
    res.status(400).send("error")
  })



})




app.listen(port,()=>{
  console.log(`server at ${port}`);
})


module.exports={app};
