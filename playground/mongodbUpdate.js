const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/MyApp',(err,client)=>{
  if (err) {
    return console.log('error');
  }
  console.log('connected');

  const db=client.db('MyApp');

  // db.collection('ToDos').findOneAndUpdate({
  //   _id:new ObjectID("5d4a5265ce3fb41290d51f9c")
  // },{
  //   $set:{
  //     completed:true}
  // },{
  //   returnOriginal:false
  // }).then((res)=>{
  //   console.log(res);
  // })


  // db.collection('users').findOneAndUpdate({
  //   _id:ObjectID("5d4a520ccc9603174c5579e3")
  // },{
  //   $set:{
  //     name:'ahmad'
  //   }
  // },{
  //   returnOriginal:false
  // }).then((res)=>{
  //   console.log(res);
  // })

  db.collection('users').findOneAndUpdate({
    _id:ObjectID("5d4a520ccc9603174c5579e3")
  },{
    $inc:{
      age:1
    }
  },{
    returnOriginal:false
  }).then((res)=>{
    console.log(res);
  })

// 5d4a520ccc9603174c5579e3

  client.close();
});
