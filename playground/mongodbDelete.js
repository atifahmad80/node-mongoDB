const {MongoClient,ObjectID}= require("mongodb");

MongoClient.connect('mongodb://localhost:27017/MyApp',(err,client)=>{
  if (err) {
    return console.log('error');
  }
  console.log('connect');

  const db=client.db('MyApp');

  // db.collection('ToDos').deleteMany({text:'Sleep '}).then((result)=>{
  //   console.log(result);
  // });

  // db.collection('ToDos').deleteOne({text:'play '}).then((res)=>{
  //   console.log(res);
  // })

  // db.collection('ToDos').findOneAndDelete({completed:false}).then((res)=>{
  //   console.log(res);
  // })


  // db.collection('Users').deleteMany({name:"ahmad"}).then((res)=>{
  //   console.log(JSON.stringify(res,undefined,2));
  // })


  db.collection('Users').findOneAndDelete({_id:ObjectID("5d4932872bbc4b221cd82717")}).then((res)=>{
    console.log(res);
  })


// 5d4932872bbc4b221cd82717



});
