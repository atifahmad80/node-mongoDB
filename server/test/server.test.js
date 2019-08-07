const expect=require('expect');
const request=require('supertest');


const {app}=require('./../server');
const {toDo}=require('./../models/ToDo');

const todos=[
  {text:"first todo"},
  {text:"second todo"},
  {text:"third todo"}]


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
