const expect=require('expect');
const request=require('supertest');


const {app}=require('./../server');
const {toDo}=require('./../models/ToDo');

// conts todos=[
//   {text:"first todo"},
//   {text:"second todo"},
//   {text:"third todo"}]


beforeEach((done)=>{
  toDo.remove({}).then(()=>done());
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

      toDo.find().then((todos)=>{
        expect(todos.length).toBe(1);
        expect(todos[0].text).toBe(text);
        done();
      }).catch((e)=>done(e));
    });
  });

  it('should not create',(done)=>{
    request(app)
    .post('/todo')
    .send({})
    .expect(400)
    .end((err,res)=>{
      if(err){
        return done(err);
      }
      toDo.find().then((todos)=>{
        expect(todos.length).toBe(0);
        done();
      }).catch((e)=>done(e));
    })
  })

})
