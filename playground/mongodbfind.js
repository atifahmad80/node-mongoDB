const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/MyApp',(err,client)=>{
  if (err) {
    return console.log("not connect");
  }
  console.log('connected');
  // const db=client.db('MyApp');
  // db.collection('ToDos').find({_id:new ObjectID('5d492e000979f6157c5c514e')}).toArray().then((docs)=>{
  //   console.log(JSON.stringify(docs,undefined,2));
  // },(error)=>{
  //   console.log('Not get any data');
  // })

  // const db=client.db('MyApp');
  // db.collection('ToDos').find().count().then((count)=>{
  //   console.log(count);
  // },(error)=>{
  //   console.log('Not get any data');
  // })


  const db=client.db('MyApp');
  db.collection('Users').find({
    name:'atif'
  }).toArray().then((doc)=>{
    console.log(JSON.stringify(doc,undefined,2));
  },(err)=>{
    console.log('not get any data');
  });

  client.close();
});
