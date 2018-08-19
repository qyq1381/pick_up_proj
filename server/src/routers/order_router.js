const _ = require('lodash');	//load low_dash library
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');
let app = express.Router();
//import model
console.log("order router run.");
let {Order} = require('../models/order');

app.post('/', (req, res)=>{
	let order = new Order({
		ContactName: req.body.ContactName,
		DepartureDate: req.body.DepartureDate,
		FlightNumber: req.body.FlightNumber,
		Location: req.body.Location,
		Passenger: req.body.Passenger,
		Luggage: req.body.Luggage,
		OrderNumber: req.body.OrderNumber,
		IdNumber: req.body.IdNumber,
		PickupTime: req.body.PickupTime
	});
	order.save().then((doc) => {
		res.send(doc);
	}, (err) => {
		res.status(400).send(err);
	});
});
/*

app.get('/:id', (req, res)=>{
	let id = req.params.id;
});

app.delete();

app.patch();
*/
module.exports = app;