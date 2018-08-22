const OrderController = require('../controller/OrderController');
const AirportController = require('../controller/AirportController');
const UserController = require('../controller/UserController');

module.exports = (app) => {
  app.post('/order', OrderController.post);
  app.post('/airport',AirportController.post);
  app.post('/user', UserController.post);

  app.get('/order', OrderController.get);
  app.get('/order/:id',OrderController.getById);
  //app.get('/order/bydayflight', OrderController.getByDayFlight);
  //app.get('/order/byday', OrderController.getByDay);

  app.get('/airport',AirportController.get);
  app.get('/airport/:id', AirportController.getById);

  app.get('/user', UserController.get);
  app.get('/user/:id', UserController.getById);
  //app.get('/user/incompleted', UserController.getUserIncompleted);
  //app.get('/user/notphone', UserController.getUserNotPhone);

  app.patch('/order/:id', OrderController.patchById);
  app.patch('/airport/:id',AirportController.patchById);
  app.patch('/user/:id', UserController.patchById);

  app.delete('/order/:id', OrderController.deleteById);
  app.delete('/airport/:id',AirportController.deleteById);
  app.delete('/user/:id', UserController.deleteById);
}