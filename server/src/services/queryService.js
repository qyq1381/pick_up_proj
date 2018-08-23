const {ObjectID} = require('mongodb');
const _ = require('lodash');	//load low_dash library
const {Order} = require('../models/order');
const {User} = require('../models/user');

module.exports={
	getPassengerLuggageByDayFlight(req, res){
		let flightNumber = req.params.flightNumber;
		let date = req.params.departureDate;
		let smallLuggage = 0;
		let largeLuggage = 0;
		let Passenger = 0;
		let responseData = {};
		console.log(flightNumber)
		Order.find({flightNumber: flightNumber})
			.then((orderInfo)=>{
				orderInfo.forEach((object)=>{
					smallLuggage += object.smallLuggage;
				largeLuggage += object.largeLuggage;
				Passenger += object.Passenger;
				});
				
				responseData = {
					sumSmallLuggage: smallLuggage,
					sumLargeLuggage: largeLuggage,
					sumPassener: Passenger,
				}
				res.status(200).send(responseData);
			}).catch((err)=>{
				res.status(400).send(err);
			});
	},
	getPassengerByDay(req, res){
		let date = req.params.departureDate;
		let responseData = {};
		let Passenger = 0;
		Order.find({departureDate:date})
			.then((orderInfo)=>{
				orderInfo.forEach((object)=>{
					Passenger += object.Passenger;
				});
				responseData = {
					sumPassenger: Passenger
				}
				res.status(200).send(responseData);
			}).catch((err)=>{
				res.status(400).send(err);
			});

	},
	getUserIncompleted(req, res){
		let day = 14;
		let currentTime = Date.now();
		let beginTime =currentTime - day * 86400 * 1000;

		User.find({$or:[{Phone: null},{Wechat: null},{Email: null}]}, {CreateTime_uni:{$gt:beginTime}})
			.then((user)=>{
				res.status(200),send({user});		
			}).catch((err)=>{
				res.status(400).send(err);
			})
		
	},

	getUserNotPhone(req, res){
		let day = 7;
		let currentTime = Date.now();
		let beginTime = currentTime - day * 86400 * 1000;

		User.find({Phone:null},{CreateTime_uni:{$gt:beginTime}}).then((user)=>{
			res.status(200).send({user});
		}).catch((err)=>{
			res.status(400).send(err);
		})
	}

}
