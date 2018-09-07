//jest
// const request = require('supertest');   
// let server;

// console.log("test work");
// describe('/order', () => {
//   beforeEach(() => {server = require('../../../server');
//                       console.log("server working");})
//   afterEach(() => {server.close(); });

//   describe('GET /', () => {  
//     it('should return all order information', async() => {
//       const res = await request(server).get('/order');
//       expect(res.status).toBe(200);
//     });
//   });
// });


// mocha
const {ObjectID} = require('mongodb');
const request = require('supertest'); 
const expect = require('expect'); 
const {app} = require('../../../server');
const {User} = require('../../models/user');


  let user = [
    {
      "Password" : "123123123", 
      "Phone" : 7089168805, 
      "WeChat" : "null", 
      "IdNumber" : 1535261579785672.0, 
      "userName" : "hansdn", 
      "Email" : "1340019726@qq.com", 
      _id: new ObjectID()
  },
  { 
    "Password" : "ahsdjkqwu", 
    "Phone" : "1231231231", 
    "WeChat" : "qw", 
    "IdNumber" : 1535260898824249.0, 
    "firstName" : "1", 
    "lastName" : "1", 
    "Email" : "11@gmail.com", 
    _id: new ObjectID()
  }
]
  // beforeEach((done) => {
  //   User.remove({}).then(() => {
  //     return User.insertMany (user)
  //   }).then(() => {
  //     done()
  //   })
  // })

// describe('POST /order', () => {

//   it('Should produce a new order', (done) => {
//     let user1 = {
//       "Password" : "1113123123", 
//       "Phone" : 127348918273, 
//       "WeChat" : "null", 
//       "IdNumber" : 1535260135449783.0, 
//       "userName" : "hahaha", 
//       "Email" : "133812@l.com", 
//     }
//     request(app)
//       .post('/order')
//       .send(user1)
//       .expect(200)
//       .expect((res) => {
//         // console.log(res.body)
//         expect(res.body.Password).toBe("qw")
//         expect(res.body.Phone).toBe("qwe")
//         expect(res.body.WeChat).toBe("qw")
//         expect(res.body.userName).toBe("ew")
//         expect(res.body.Email).toBe(12312)
  
//       })
//       .end((err, res) => {
//         if (err) {
//           return done(err);
//         }
//       Order.find().then((order) => {
//         // console.log(JSON.stringify(order[0].departureDate))
//         expect(order.length).toBe(3)
//         expect(order[2].address_line_1).toBe("qw")
//         expect(order[2].address_line_2).toBe("qwe")
//         expect(order[2].city).toBe("qw")
//         expect(order[2].state).toBe("ew")
//         expect(order[2].zip).toBe(12312)
//         expect(order[2].country).toBe("sad")
//         expect(order[2].flightNumber).toBe("123")
//         expect(order[2].Passenger).toBe(12)
//         expect(order[2].largeLuggage).toBe(12)
//         expect(order[2].smallLuggage).toBe(1)
//         expect(JSON.stringify(order[2].departureDate)).toBe(JSON.stringify(new Date(2018, 08, 30)))
//         done()
//       }).catch((e) => done(e));
//     })
//   })
// })
//   it('Should not produce a new order with invalid body data', (done) => { 
//     request(app)
//       .post('/order')
//       .send({})
//       .expect(400)
//       .end((err, res) => {
//         if (err) {
//           return done(err);
//         }
//       Order.find().then((order) => {
//         // console.log(order[0])
//         expect(order.length).toBe(2)
//         done()
//       }).catch((e) => done(e));
//     })
//   })


// describe('GET /order', () => {

//   it('Should get all orders', (done) => {
//     request(app)
//       .get('/order')
//       .expect(200)
//       .expect((res) => {
//         // console.log(res.body);
//         expect(res.body.order.length).toBe(2);
//       })
//       .end(done);
//   })
// })

//   describe('GET /order/:id', () => {

//     it('Should return order by id', (done) => {
//       request(app)
//         .get(`/order/${order[0]._id.toHexString()}` ) // generate a proper id
//         .expect(200)
//         .expect((res) => {
//           // console.log('又咋的了'+res.body.order)
//           expect(res.body.order.Passenger).toBe(order[0].Passenger)
//           expect(res.body.order.address_line_1).toBe(order[0].address_line_1)
//           expect(res.body.order.address_line_2).toBe(order[0].address_line_2)
//           expect(res.body.order.city).toBe(order[0].city)
//           expect(res.body.order.state).toBe(order[0].state)
//           expect(res.body.order.zip).toBe(order[0].zip)
//           expect(res.body.order.country).toBe(order[0].country)
//           expect(res.body.order.flightNumber).toBe(order[0].flightNumber)
//           expect(res.body.order.largeLuggage).toBe(order[0].largeLuggage)
//           expect(res.body.order.smallLuggage).toBe(order[0].smallLuggage)
//           expect(JSON.stringify(res.body.order.departureDate)).toBe(JSON.stringify(order[0].departureDate))
//         })
//         .end(done)
//     })

//     it('Should return err if the id is not found', (done) => { 
//       let HexId = new ObjectID().toHexString()
//       request(app)
//         .get(`/order/${HexId}`)
//         .expect(404)
//         .end(done)
//     })

//     it('Should return err if the id is not valid', (done) => { 
//       request(app)
//         .get(`/order/123`)
//         .expect(404)
//         .end(done)
//     })
//   })

//   describe('DELETE /order/:id', () => {

//     it('Should delete order by id', (done) => {
//       let HexId = order[0]._id.toHexString()
//       request(app)
//         .delete(`/order/${HexId}` ) 
//         .expect(200)
//         .expect((res) => {
//           expect(res.body.order._id).toBe(HexId)
//         })
//         .end((err, res) => {
//           if(err) {
//             return done(err);
//           }
//         Order.findById(HexId).then((order) => {
//           // console.log(order)
//           expect(order).toBeFalsy(); // toNotExist is not exist anymore
//           done()
//         }).catch((e) => done(e))
//       })
//     })

//     it('Should return err if the id is not found', (done) => { 
//       let HexId = new ObjectID().toHexString()
//       request(app)
//         .delete(`/order/${HexId}`)
//         .expect(404)
//         .end(done)
//     })

//     it('Should return err if the id is not valid', (done) => { 
//       request(app)
//         .delete(`/order/123`)
//         .expect(404)
//         .end(done)
//     })
//   })

//   describe('UPDATE /order/:id', () => {

//     it('Should update order by id', (done) => {
//       let HexId = order[0]._id.toHexString()
//       let largeLuggage = 13,
//           smallLuggage = 15
//       request(app)
//         .patch(`/order/${HexId}` )
//         .send({
//           largeLuggage,
//           smallLuggage
//         }) 
//         .expect(200)
//         .expect((res) => {
//           expect(res.body.order.largeLuggage).toBe(largeLuggage)
//           expect(res.body.order.smallLuggage).toBe(smallLuggage)
//         })
//         .end((err, res) => {
//           if(err) {
//             return done(err);
//           }
//         Order.findById(HexId).then((order) => {
//           // console.log(order)
//           expect(order.largeLuggage).toBe(13);
//           expect(order.smallLuggage).toBe(15);
//           done()
//         }).catch((e) => done(e))
//       })
//     })

//     it('Should return err if the id is not found', (done) => { 
//       let HexId = new ObjectID().toHexString()
//       let largeLuggage = 13,
//           smallLuggage = 15
//       request(app)
//         .patch(`/order/${HexId}`)
//         .send({
//           largeLuggage,
//           smallLuggage
//         })
//         .expect(404)
//         .end(done)
//     })

//     it('Should return err if the id is not valid', (done) => { 
//       let largeLuggage = 13,
//           smallLuggage = 15
//       request(app)
//         .patch(`/order/123`)
//         .send({
//           largeLuggage,
//           smallLuggage
//         })
//         .expect(404)
//         .end(done)
//     })
//   })
