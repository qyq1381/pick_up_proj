const {ObjectID} = require('mongodb');
const _ = require('lodash');	//load low_dash library
const {Order} = require('../models/order');
const {User} = require('../models/user');

module.exports={
	getPassengerLuggageByDayFlight(req, res){
		let flightNumber = req.body.flightNumber;
		let date = req.body.departureDate;
		let smallLuggage = 0;
		let largeLuggage = 0;
		let Passenger = 0;
		let responseData = {};
		Order.find({flightNumber:flightNumber, departureDate:date})
			.then((orderInfo)=>{
				smallLuggage += orderInfo.smallLuggage;
				largeLuggage += orderInfo.largeLuggage;
				Passenger += orderInfo.Passenger;

				responseData = {
					sumSmallLuggage: smallLuggage,
					sumLargeLuggage: largeLuggage,
					sumPassener: Passenger
				}
				res.status(200).send(responseData);
			}).catch((err)=>{
				res.status(400).send(err);
			});

	},
	getPassengerByDay(req, res){
		let date = req.body.departureDate;
		Order.find({departureDate:date})
			.then((orderInfo)=>{
				
				Passenger += orderInfo.Passenger;

				responseData = {
					sumPassener: Passenger
				}
				res.status(200).send(responseData);
			}).catch((err)=>{
				res.status(400).send(err);
			});

	},
	getUserIncompleted(req, res){
		res.status(400).send('still in developping');
	},

	getUserNotPhone(req, res){
		let day = req.body.day;
		let currentTime = Date.now();
		let beginTime = currentDay - day*86400*1000;

		User.find({Phone:null},{$gt:beginTime}).then((user)=>{
			res.status(200).send({user});
		}).catch((err)=>{
			res.status(400).send(err);
		})
	}

}
