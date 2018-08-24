const OrderController = require('../controller/OrderController');
const AirportController = require('../controller/AirportController');
const UserController = require('../controller/UserController');
const QueryController = require('../controller/QueryController');
<<<<<<< HEAD
const AuthenticationController = require('./controllers/AuthenticationController')
=======
>>>>>>> 10253ceb18a4cb2417f4e8cfbcd932c5ff751159

module.exports = (app) => {
  app.post('/order', OrderController.post);
  app.post('/airport',AirportController.post);
  app.post('/user', UserController.post);
<<<<<<< HEAD
  app.post('/register', AuthenticationController.register);
=======
>>>>>>> 10253ceb18a4cb2417f4e8cfbcd932c5ff751159

  app.get('/order', OrderController.get);
  app.get('/order/:id',OrderController.getById);
  
  app.get('/airport',AirportController.get);
  app.get('/airport/:id', AirportController.getById);
  app.get('/user', UserController.get);
  app.get('/user/:id', UserController.getById);
  
  app.get('/query/bydayflight/:flightNumber', QueryController.getByDayFlight);
  app.get('/query/byday/:departureDate', QueryController.getByDay);
  app.get('/query/incompleted', QueryController.getUserIncompleted);
  app.get('/query/notphone', QueryController.getUserNotPhone);

  app.patch('/order/:id', OrderController.patchById);
  app.patch('/airport/:id',AirportController.patchById);
  app.patch('/user/:id', UserController.patchById);

  app.delete('/order/:id', OrderController.deleteById);
  app.delete('/airport/:id',AirportController.deleteById);
  app.delete('/user/:id', UserController.deleteById);
}