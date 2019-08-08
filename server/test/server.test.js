const expect=require('expect');
const request=require('supertest');
const {ObjectID}=require('mongodb');

const {app}=require('./../server');
const {toDo}=require('./../models/ToDo');

const todos=[
  {_id:new ObjectID(),
    text:"first todo"},
  {_id:new ObjectID(),
    text:"second todo"},
  {_id:new ObjectID(),
    text:"third todo"}]


beforeEach((done)=>{
  toDo.remove({}).then(()=>{
    return toDo.insertMany(todos);
  }).then(()=>done());
});

describe('POST /todo',()=>{
  it('create new todo',(done)=>{
    var text='test todo'


    request(app)
    .post('/todo')
    .send({text})
    .expect(200)
    .expect((res)=>{
      expect(res.body.text).toBe(text);
    })
    .end((err,res)=>{
      if (err) {
        return done(err);
      }

      toDo.find({text}).then((todos)=>{
        expect(todos.length).toBe(1);
        expect(todos[0].text).toBe(text);
        done();
      }).catch((e)=>done(e));
    });
  });

  it('should 2',(done)=>{
    request(app)
    .post('/todo')
    .send({})
    .expect(200)
    .end((err,res)=>{
      if (err) {
        return done(err);
      }

      toDo.find().then((todos)=>{
        expect(todos.length).toBe(3);
        done();
      }).catch((e)=>done(e));
    });
  });
});

describe('GET /todo',()=>{
  it('get all todos',(done)=>{
    request(app)
    .get('/todo')
    .expect(200)
    .expect((res)=>{
      // console.log(res.body);
      expect(res.body.todoslist.length).toBe(3);
    })
    .end(done);
  })
})


  describe('GET /todo/:id',()=>{
    it('check id validation',(done)=>{
      request(app)
        .get(`/todo/${todos[0]._id.toHexString()}`)
        .expect(200)
        .expect((res)=>{
          expect(res.body.succ.text).toBe(todos[0].text);
        })
        .end(done);
    })


    it('id not found',(done)=>{
      request(app)
      .get(`/todo/${new ObjectID().toHexString}`)
      .expect(404)
      .end(done)
    })

    it('invalid id',(done)=>{
      request(app)
      .get(`/todo/123`)
      .expect(404)
      .end(done)
    })
  })

  describe('Delete /todo/:id',()=>{
    it('check id validation',(done)=>{
      var hexid=todos[1]._id.toHexString();
      request(app)
        .delete(`/todo/${hexid}`)
        .expect(200)
        .expect((res)=>{
          expect(res.body.succ._id).toBe(hexid);
        })
        .end((err,res)=>{
          if (err) {
            return done(err)
          }

          toDo.findById(hexid).then((todo)=>{
            expect(!todo);
            done();
          }).catch((e)=>done(e));
        });
    })


    it('id not found',(done)=>{
      request(app)
      .delete(`/todo/${new ObjectID().toHexString}`)
      .expect(404)
      .end(done)
    })

    it('invalid id',(done)=>{
      request(app)
      .delete(`/todo/123`)
      .expect(404)
      .end(done)
    })
  })
