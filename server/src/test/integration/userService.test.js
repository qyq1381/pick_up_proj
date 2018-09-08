//mocha
const {ObjectID} = require('mongodb');
const request = require('supertest'); 
const expect = require('expect'); 
const {app} = require('../../../server');
const {User} = require('../../models/user');


  let user = [
    {
      "Password" : "12312Nsd", 
      "Phone" : 7089168805, 
      "WeChat" : "dghg", 
      "userName" : "hansdn", 
      "firstName" : "1", 
      "lastName" : "1", 
      "Email" : "1340019726@qq.com", 
      _id: new ObjectID()
  },
  { 
    "Password" : "ahsdIS2kqwu", 
    "Phone" : 1231231231, 
    "WeChat" : "qw", 
    "userName" : "asdIS1sd", 
    "firstName" : "2", 
    "lastName" : "2", 
    "Email" : "11@gmail.com", 
    _id: new ObjectID()
  }
 ]
 beforeEach((done) => {
  User.remove({}).then(() => {
    return User.insertMany(user)
  }).then(() => {
    done()
  })
 })
describe('POST /user', () => {
  it('Should produce a new user', (done) => {
    let user1 = {
      "firstName" : "3", 
      "lastName" : "3", 
      "password" : "1113123123", 
      "phone" : 127348918273, 
      "weChat" : "null", 
      "userName" : "hahaha", 
      "email" : "133812@l.com", 
    }
    request(app)
      .post('/user')
      .send(user1)
      .expect(200)
      .expect((res) => {
        console.log(res.body)
        expect(res.body.firstName).toBe("3")
        expect(res.body.lastName).toBe("3")
        expect(res.body.Password).toBe("1113123123")
        expect(res.body.Phone).toBe(127348918273)
        expect(res.body.WeChat).toBe("null")
        expect(res.body.userName).toBe("hahaha")
        expect(res.body.Email).toBe("133812@l.com")
  
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }
      User.find().then((user) => {
        expect(user.length).toBe(3)
        expect(user[2].firstName).toBe("3")
        expect(user[2].lastName).toBe("3")
        expect(user[2].Password).toBe("1113123123")
        expect(user[2].Phone).toBe(127348918273)
        expect(user[2].WeChat).toBe("null")
        expect(user[2].userName).toBe("hahaha")
        expect(user[2].Email).toBe("133812@l.com")
        done()
      }).catch((e) => done(e));
    })
  })

  it('Should not produce a new user with invalid body data', (done) => { 
    request(app)
      .post('/user')
      .send({})
      .expect(400)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
      User.find().then((user) => {
        // console.log(user[0])
        expect(user.length).toBe(2)
        done()
      }).catch((e) => done(e));
    })
  })

  it('Should not produce a new user with duplicate phone number', (done) => { 
    let user2 = {
      "firstName" : "4", 
      "lastName" : "4", 
      "password" : "1113123123", 
      "phone" : 7089168805, 
      "weChat" : "null", 
      "userName" : "hahaha", 
      "email" : "1334812@l.com", 
    }
    request(app)
      .post('/user')
      .send(user2)
      .expect(400)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
      User.find().then((user) => {
        // console.log(user[0])
        expect(user.length).toBe(2)
        done()
      }).catch((e) => done(e));
    })
  })
  it('Should not produce a new user with duplicate email', (done) => { 
    let user3 = {
      "firstName" : "4", 
      "lastName" : "4", 
      "password" : "1113123123", 
      "phone" : 128237453, 
      "weChat" : "null", 
      "userName" : "hahaha", 
      "email" : "1340019726@qq.com", 
    }
    request(app)
      .post('/user')
      .send(user3)
      .expect(400)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
      User.find().then((user) => {
        // console.log(user[0])
        expect(user.length).toBe(2)
        done()
      }).catch((e) => done(e));
    })
  })
})

describe('GET /user', () => {

  it('Should get all user', (done) => {
    request(app)
      .get('/user')
      .expect(200)
      .expect((res) => {
        // console.log(res.body);
        expect(res.body.user.length).toBe(2);
      })
      .end(done);
  })
})

  describe('GET /user/:id', () => {

    it('Should return user by id', (done) => {
      request(app)
        .get(`/user/${user[0]._id.toHexString()}` ) // generate a proper id
        .expect(200)
        .expect((res) => {
          // console.log(res.body.user)
          expect(res.body.user.Password).toBe(user[0].Password)
          expect(res.body.user.Phone).toBe(user[0].Phone)
          expect(res.body.user.WeChat).toBe(user[0].WeChat)
          expect(res.body.user.userName).toBe(user[0].userName)
          expect(res.body.user.Email).toBe(user[0].Email)
        })
        .end(done)
    })

    it('Should return err if the id is not found', (done) => { 
      let HexId = new ObjectID().toHexString()
      request(app)
        .get(`/user/${HexId}`)
        .expect(404)
        .end(done)
    })

    it('Should return err if the id is not valid', (done) => { 
      request(app)
        .get(`/user/123`)
        .expect(404)
        .end(done)
    })
  })

  describe('DELETE /user/:id', () => {

    it('Should delete user by id', (done) => {
      let HexId = user[0]._id.toHexString()
      request(app)
        .delete(`/user/${HexId}` ) 
        .expect(200)
        .expect((res) => {
          expect(res.body.user._id).toBe(HexId)
        })
        .end((err, res) => {
          if(err) {
            return done(err);
          }
        User.findById(HexId).then((user) => {
          // console.log(user)
          expect(user).toBeFalsy(); // toNotExist is not exist anymore
          done()
        }).catch((e) => done(e))
      })
    })

    it('Should return err if the id is not found', (done) => { 
      let HexId = new ObjectID().toHexString()
      request(app)
        .delete(`/user/${HexId}`)
        .expect(404)
        .end(done)
    })

    it('Should return err if the id is not valid', (done) => { 
      request(app)
        .delete(`/user/123`)
        .expect(404)
        .end(done)
    })
  })

  describe('UPDATE /user/:id', () => {

    it('Should update user by id', (done) => {
      let HexId = user[0]._id.toHexString()
      let Phone = 123412312
          WeChat = "asda2"
      request(app)
        .patch(`/user/${HexId}` )
        .send({
          Phone,
          WeChat
        }) 
        .expect(200)
        .expect((res) => {
          // console.log(res.body.user)
          expect(res.body.user.Phone).toBe(Phone)
          expect(res.body.user.WeChat).toBe(WeChat)
        })
        .end((err, res) => {
          if(err) {
            return done(err);
          }
        User.findById(HexId).then((user) => {
          // console.log(user)
          expect(user.Phone).toBe(123412312);
          expect(user.WeChat).toBe("asda2");
          done()
        }).catch((e) => done(e))
      })
    })

    it('Should return err if the id is not found', (done) => { 
      let HexId = new ObjectID().toHexString()
      let Phone = 123412312,
          weChat = "asda2"
      request(app)
        .patch(`/user/${HexId}`)
        .send({
          Phone,
          weChat
        })
        .expect(404)
        .end(done)
    })

    it('Should return err if the id is not valid', (done) => { 
      let Phone = 123412312,
      weChat = "asda2"
      request(app)
        .patch(`/user/123`)
        .send({
          Phone,
          weChat
        })
        .expect(404)
        .end(done)
    })
  })
