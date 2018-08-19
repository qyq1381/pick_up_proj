const _ = require('lodash');	//load low_dash library
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');
const port = 3000;

var {mongoose} = require('./src/db/mongoose');
var {User} = require('./src/models/user');
var {Airport} = require('./src/models/airport');
var order_router = require('./src/routers/order_router');
var app = express();

app.listen(port, ()=>{
	console.log("Started listening port "+port);
});
//middleware
app.use(require('./src/middleware/middleware'));

require('./src/routers/router')(app);
//router
/*
app.use('/user', user_router);
app.use('/order', order_router);
*/


module.exports = {app};

