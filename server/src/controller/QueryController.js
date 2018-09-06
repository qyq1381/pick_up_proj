const {ObjectID} = require('mongodb');
const _ = require('lodash');	//load low_dash library
const service = require('../services/queryService');

module.exports={
	getByDayFlight(req, res){
		service.getPassengerLuggageByDayFlight(req, res);
	},
	getByFlightNumber(req, res){
		service.getPassengerLuggageByDayFlight(req, res);
	},
	getByDay(req, res){
		service.getPassengerByDay(req, res);
	},
	getUserIncompleted(req, res){
		service.getUserIncompleted(req, res);
	},
	getUserNotPhone(req, res){
		service.getUserNotPhone(req, res);
	},
	getFlightInfo(req, res) {
		service.getFlightInfo(req, res);
	},
	getUserList(req, res) {
		service.getUserList(req, res);
	}
}
