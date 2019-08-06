// const MongoClient=require('mongodb').MongoClient;
const {MongoClient}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/MyApp',(err,client)=>{
  if(err){
    return console.log('not connect');
  }
  console.log('connected');

   const db=client.db('MyApp');
  //
  // db.collection('ToDos').insertOne({
  //   text:"do this",
  //   completed:false
  // },(err,result)=>{
  //   if(err){
  //     return console.log('not inserted');
  //   }
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // })

    db.collection('Users').insertOne({
    name:'ahmad',
    age:35,
    location:'pakistan'
  },(err,result)=>{
    if (err) {
      return console.log("not saved");
    }
    console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
  })



  client.close();
});

// const MongoClient=require('mongodb').MongoClient;
//
// MongoClient.connect('mongodb://localhost:27017/MyApp',(err,db)=>{
//   if(err){
//     return console.log('not connect');
//   }
//   console.log('connected');
//
//   //const db=client.db['MyApp'];
//
//   db.collection('ToDos').insertOne({
//     text:"do this",
//     completed:false
//   },(err,result)=>{
//     if(err){
//       return console.log('not inserted');
//     }
//     console.log(JSON.stringify(result.ops,undefined,2));
//   });
//
//   db.close();
// });
