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

beforeEach((done) => {
  Order.remove({}).then(() => {
    done();

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
    departureDate : new Date(2018, 07, 30),
    _id: new ObjectID()
  },
  { address : {
    address_line_1 : "hhahh", 
    address_line_2 : "haha", 
    city : "hah", 
    state : "hah", 
    zip : 31245, 
    country : "haha"
    },
    flightNumber : "hahah", 
    Passenger : 2, 
    largeLuggage : 2, 
    smallLuggage : 1, 
    // orderTime : "2018-08-26T04:36:49.996+0000", 
    // orderTime_uni : 1535258209996.0, 
    // orderNumber : 1535258209996299465, 
    departureDate : new Date(2018, 07, 31),
    _id: new ObjectID()
  }
]
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
<<<<<<< HEAD
      flightNumber : 123, 
      numpassenger : 12, 
      largeLuggage : 12, 
      smallLuggage : 1, 
      //orderTime : "2018-08-26T04:36:49.996+0000", 
      //orderTime_uni : 1535258209996.0, 
      //orderNumber : 1535258209996299465, 
      departureDate : "2018-08-30T00:00:00.000+0000"
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

        console.log(res.body);
      let varable = res.body.Passenger;
        expect(varable).toBe(12);

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
          console.log(order);
          expect(order[0].Passenger).toBe(12)
          done()
        }).catch((e) => done(e));
      })

      Order.find().then((order) => {
        // console.log(JSON.stringify(order[0].departureDate))
        expect(order.length).toBe(3)
        expect(order[2].address.address_line_1).toBe("qw")
        expect(order[2].address.address_line_2).toBe("qwe")
        expect(order[2].address.city).toBe("qw")
        expect(order[2].address.state).toBe("ew")
        expect(order[2].address.zip).toBe(12312)
        expect(order[2].address.country).toBe("sad")
        expect(order[2].flightNumber).toBe("123")
        expect(order[2].Passenger).toBe(12)
        expect(order[2].largeLuggage).toBe(12)
        expect(order[2].smallLuggage).toBe(1)
        expect(JSON.stringify(order[2].departureDate)).toBe(JSON.stringify(new Date(2018, 08, 30)))
        done()
      }).catch((e) => done(e));
    })
  })

  it('Should not produce a new order with invalid body data', (done) => { 
    request(app)
      .post('/order')
      .send({})
      .expect(400)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
      Order.find().then((order) => {
        // console.log(order[0])
        expect(order.length).toBe(2)
        done()
      }).catch((e) => done(e));
    })
  })


describe('GET /order', () => {

  it('Should get all orders', (done) => {
    request(app)
      .get('/order')
      .expect(200)
      .expect((res) => {
        // console.log(res.body);
        expect(res.body.order.length).toBe(2);
      })
      .end(done);
  })
})

  describe('GET /order/:id', () => {

    it('Should return order by id', (done) => {
      request(app)
        .get(`/order/${order[0]._id.toHexString()}` ) // generate a proper id
        .expect(200)
        .expect((res) => {
          // console.log('又咋的了'+res.body.order)
          expect(res.body.order.Passenger).toBe(order[0].Passenger)
          expect(res.body.order.address.address_line_1).toBe(order[0].address.address_line_1)
          expect(res.body.order.address.address_line_2).toBe(order[0].address.address_line_2)
          expect(res.body.order.address.city).toBe(order[0].address.city)
          expect(res.body.order.address.state).toBe(order[0].address.state)
          expect(res.body.order.address.zip).toBe(order[0].address.zip)
          expect(res.body.order.address.country).toBe(order[0].address.country)
          expect(res.body.order.flightNumber).toBe(order[0].flightNumber)
          expect(res.body.order.largeLuggage).toBe(order[0].largeLuggage)
          expect(res.body.order.smallLuggage).toBe(order[0].smallLuggage)
          expect(JSON.stringify(res.body.order.departureDate)).toBe(JSON.stringify(order[0].departureDate))
        })
        .end(done)
    })

    it('Should return err if the id is not found', (done) => { 
      let HexId = new ObjectID().toHexString()
      request(app)
        .get(`/order/${HexId}`)
        .expect(404)
        .end(done)
    })

    it('Should return err if the id is not valid', (done) => { 
      request(app)
        .get(`/order/123`)
        .expect(404)
        .end(done)
    })
  })

  describe('DELETE /order/:id', () => {

    it('Should delete order by id', (done) => {
      let HexId = order[0]._id.toHexString()
      request(app)
        .delete(`/order/${HexId}` ) 
        .expect(200)
        .expect((res) => {
          expect(res.body.order._id).toBe(HexId)
        })
        .end((err, res) => {
          if(err) {
            return done(err);
          }
        Order.findById(HexId).then((order) => {
          // console.log(order)
          expect(order).toBeFalsy(); // toNotExist is not exist anymore
          done()
        }).catch((e) => done(e))
      })
    })

    it('Should return err if the id is not found', (done) => { 
      let HexId = new ObjectID().toHexString()
      request(app)
        .delete(`/order/${HexId}`)
        .expect(404)
        .end(done)
    })

    it('Should return err if the id is not valid', (done) => { 
      request(app)
        .delete(`/order/123`)
        .expect(404)
        .end(done)
    })
  })

  describe('UPDATE /order/:id', () => {

    it('Should update order by id', (done) => {
      let HexId = order[0]._id.toHexString()
      request(app)
        .delete(`/order/${HexId}` ) 
        .expect(200)
        .expect((res) => {
          expect(res.body.order._id).toBe(HexId)
        })
        .end((err, res) => {
          if(err) {
            return done(err);
          }
        Order.findById(HexId).then((order) => {
          console.log(order)
          expect(order).toBeFalsy(); // toNotExist() is not exist anymore...
          done()
        }).catch((e) => done(e))
      })
    })

    it('Should return err if the id is not found', (done) => { 
      let HexId = new ObjectID().toHexString()
      request(app)
        .delete(`/order/${HexId}`)
        .expect(404)
        .end(done)
    })

    it('Should return err if the id is not valid', (done) => { 
      request(app)
        .delete(`/order/123`)
        .expect(404)
        .end(done)
    })
  })




