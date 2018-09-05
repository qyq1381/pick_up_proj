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
const {Order} = require('../../models/order');

  let order = [{ address : {
    address_line_1 : "qwq", 
    address_line_2 : "qwq", 
    city : "qwq", 
    state : "qwq", 
    zip : 12345, 
    country : "qwq"
    },
    flightNumber : "qwq", 
    Passenger : 1, 
    largeLuggage : 1, 
    smallLuggage : 1, 
    // orderTime : "2018-08-26T04:36:49.996+0000", 
    // orderTime_uni : 1535258209996.0, 
    // orderNumber : 1535258209996299465, 
    departureDate : new Date(2018, 07, 30)
  }]
  beforeEach((done) => {
    Order.remove({}).then(() => {
      return Order.insertMany (order)
    }).then(() => {
      done()
    })
  })

describe('POST /order', () => {

  it('Should produce a new order', (done) => {
    let order1 = { address : {
      address_line_1 : "qw", 
      address_line_2 : "qwe", 
      city : "qw", 
      state : "ew", 
      zip : 12312, 
      country : "sad"
      },
      flightNumber : "123", 
      Passenger : 12, 
      largeLuggage : 12, 
      smallLuggage : 1, 
      // orderTime : "2018-08-26T04:36:49.996+0000", 
      // orderTime_uni : 1535258209996.0, 
      // orderNumber : 1535258209996299465, 
      departureDate : new Date(2018, 08, 30)
    }
    request(app)
      .post('/order')
      .send(order1)
      .expect(200)
      .expect((res) => {
        // console.log(res.body)
        expect(res.body.address.address_line_1).toBe("qw")
        expect(res.body.address.address_line_2).toBe("qwe")
        expect(res.body.address.city).toBe("qw")
        expect(res.body.address.state).toBe("ew")
        expect(res.body.address.zip).toBe(12312)
        expect(res.body.address.country).toBe("sad")
        expect(res.body.flightNumber).toBe("123")
        expect(res.body.Passenger).toBe(12)
        expect(res.body.largeLuggage).toBe(12)
        expect(res.body.smallLuggage).toBe(1)
        expect(res.body.departureDate).toBe("2018-09-30T05:00:00.000Z") //different from database
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }
      Order.find().then((order) => {
        // console.log(JSON.stringify(order[0].departureDate))
        expect(order.length).toBe(2)
        expect(order[1].address.address_line_1).toBe("qw")
        expect(order[1].address.address_line_2).toBe("qwe")
        expect(order[1].address.city).toBe("qw")
        expect(order[1].address.state).toBe("ew")
        expect(order[1].address.zip).toBe(12312)
        expect(order[1].address.country).toBe("sad")
        expect(order[1].flightNumber).toBe("123")
        expect(order[1].Passenger).toBe(12)
        expect(order[1].largeLuggage).toBe(12)
        expect(order[1].smallLuggage).toBe(1)
        expect(JSON.stringify(order[1].departureDate)).toBe(JSON.stringify(new Date(2018, 08, 30)))
        done()
      }).catch((e) => done(e));
    })
  })

  it('Should not produce a new order with invalid body data', (done) => { // always works
    request(app)
      .post('/order')
      .send({})
      .expect(400)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
      Order.find().then((order) => {
        console.log(order[1])
        expect(order.length).toBe(1)
        done()
      }).catch((e) => done(e));
    })
  })
})


// describe('GET /order', () => {

//   it('Should get a order by findByFilter method', (done) => {
//     request(app)
//       .get('/order')
//       .send(order1)
//       .expect(200)
//       .expect((res) => {
//         // console.log(res.body)
//         expect(res.body.address.address_line_1).toBe("qw")
//         expect(res.body.address.address_line_2).toBe("qwe")
//         expect(res.body.address.city).toBe("qw")
//         expect(res.body.address.state).toBe("ew")
//         expect(res.body.address.zip).toBe(12312)
//         expect(res.body.address.country).toBe("sad")
//         expect(res.body.flightNumber).toBe("123")
//         expect(res.body.Passenger).toBe(12)
//         expect(res.body.largeLuggage).toBe(12)
//         expect(res.body.smallLuggage).toBe(1)
//         expect(res.body.departureDate).toBe("2018-09-30T05:00:00.000Z") //different from database
//       })
//       .end((err, res) => {
//         if (err) {
//           return done(err);
//         }
//       Order.find().then((order) => {
//         // console.log(JSON.stringify(order[0].departureDate))
//         expect(order.length).toBe(2)
//         expect(order[1].address.address_line_1).toBe("qw")
//         expect(order[1].address.address_line_2).toBe("qwe")
//         expect(order[1].address.city).toBe("qw")
//         expect(order[1].address.state).toBe("ew")
//         expect(order[1].address.zip).toBe(12312)
//         expect(order[1].address.country).toBe("sad")
//         expect(order[1].flightNumber).toBe("123")
//         expect(order[1].Passenger).toBe(12)
//         expect(order[1].largeLuggage).toBe(12)
//         expect(order[1].smallLuggage).toBe(1)
//         expect(JSON.stringify(order[1].departureDate)).toBe(JSON.stringify(new Date(2018, 08, 30)))
//         done()
//       }).catch((e) => done(e));
//     })
//   })

//   it('Should not produce a new order with invalid body data', (done) => { // always works
//     request(app)
//       .post('/order')
//       .send({})
//       .expect(400)
//       .end((err, res) => {
//         if (err) {
//           return done(err);
//         }
//       Order.find().then((order) => {
//         console.log(order[1])
//         expect(order.length).toBe(1)
//         done()
//       }).catch((e) => done(e));
//     })
//   })
// })






