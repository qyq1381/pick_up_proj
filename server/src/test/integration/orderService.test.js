// //jest
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


//mocha
const {ObjectID} = require('mongodb');
const request = require('supertest'); 
const expect = require('expect'); 
const {app} = require('../../../server');
const {Order} = require('../../models/order');

beforeEach((done) => {
  Order.remove({}).then(() => {
    done()
  })
})
describe('POST /order', () => {
  it('Should produce a new order', (done) => {
    let order = { Address : {
      address_line_1 : "qw", 
      address_line_2 : "qwe", 
      city : "qw", 
      state : "ew", 
      zip : 12312, 
      country : "sad"
      },
      flightNumber : 123, 
      Passenger : 12, 
      largeLuggage : 12, 
      smallLuggage : 1, 
      orderTime : "2018-08-26T04:36:49.996+0000", 
      orderTime_uni : 1535258209996.0, 
      orderNumber : 1535258209996299465, 
      departureDate : "2018-08-30T00:00:00.000+0000"
    }
    request(app)
      .post('/order')
      .send(order)
      .expect(200)
      .expect((res) => {
        expect(res.body.Passenger).toBe(12)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        Order.find().then((order) => {
          expect(order[0].Passenger).toBe(12)
          done()
        }).catch((e) => done(e));
      })
    })
  })
})

