const {ObjectID} = require('mongodb');
const _ = require('lodash');	//load low_dash library
const {Order} = require('../models/order');

module.exports={
	
	postModel(req, res){
		let orderTime = new Date();
		let orderNumber = getOrderNumber(orderTime);
		let order = new Order({
			flightNumber : req.body.flightNumber,
			Passenger: req.body.Passenger,
			largeLuggage: req.body.largeLuggage,
			smallLuggage: req.body.smallLuggage,
			orderTime: orderTime.getTime(),
			orderTime_uni: orderTime.getTime(),
			orderNumber: orderNumber,
			departureDate: req.body.departureDate,
			address_line_1: req.body.address_line_1,
			address_line_2: req.body.address_line_2,
			city: req.body.city,
			state: req.body.state,
			zip: req.body.zip,
			country: req.body.country,
		});
		order.save().then((doc) => {
			res.status(200).send(doc);
		}, (err) => {
			res.status(400).send(err);
		});
	},


	// getByFilter(filter, res){ // doesn't work
	// 	Order.find().then((model) => {
	// 		res.status(200).send({model});
	// 	}, (err) => {
	// 		res.status(400).send(`The error is "${err}"`);
	// 	}).catch((err)=>{
	// 		res.status(400).send(`The reject error is "${err}"`);
	// 	});
	// },
	getAll(req, res){
		Order.find().then((order) => {
			res.send({order})
		},(err) => {
			res.status(400).send(err)
		})
	},

	getById(req, res){
		
		let id = req.params.id;

		if(!ObjectID.isValid(id)){
			return res.status(404).send();
		}
		Order.findById(id).then((order)=>{
			if(!order){
				return res.status(404).send();
			}
			res.send({order});
		}).catch((err)=>{
			res.status(400).send(`bad request made by: ${err}`);
		});
	},

	getByDayFlight(req, res){
		let Day = req.body.Day;
		let Flight = req.body.Flight;	



	},
	getByDay(req, res){
		let Day = req.body.Day;
	},

	patchById(pickArray, req, res){ //may need add complete and completeAt
		let id = req.params.id;
		let body = _.pick(req.body, pickArray);
			// console.log(req.body)
		if(!ObjectID.isValid(id)) {
			return res.status(404).send();
		}

		Order.findByIdAndUpdate(id, {$set: body}, {new: true}).then((order)=>{
			if(!order){
				return res.status(404).send();
			}
			res.send({order});
		}).catch((err) => {
			res.status(400).send(`bad request made by: ${err}`);
		});
	},

	deleteById(req, res){
		let _id = req.params.id;

		if(!ObjectID.isValid(_id)){
			return res.status(404).send();
		}
		Order.findByIdAndRemove(_id).then((order) => {
			if(!order){
				return res.status(404).send();
			}
			res.send({order});
		}).catch((err) => {
			res.status(400).send(`bad request made by: ${err}`);
		});
	}
}


function getOrderNumber(ordertime){
	let timeStamp="";  
	for(let i=0;i<6;i++) 
	{
		timeStamp += Math.floor(Math.random()*10);
	}
	return ordertime.getTime().toString() + timeStamp;

}