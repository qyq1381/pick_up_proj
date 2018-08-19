const {Model} = require('../models/order');
const {ObjectID} = require('mongodb');
const _ = require('lodash');	//load low_dash library
const commonMethod = require('../services/commonMethod');

module.exports = {
	post(req, res){
		commonMethod.postModel(Model, req, res);
	},

	get(req, res) {
		//filter should come from request
		const filter = {
			//write filter
		}
		commonMethod.getByFilter(Model, filter, req, res);
	},

	getById(req, res) {
		commonMethod.getById(Model, req, res);
	},

	patchById(req, res){
		//pickArray should come from request
		let pickArray = ['ContactName', 'DepartureDate',
						'FlightNumber','Location',
						'Passenger','Luggage',
						'OrderNumber','IdNumber','PickupTime'];
		commonMethod.patchById(Model, pickArray, req, res);
	},

	deleteById(req, res){
		commonMethod.deleteById(Model, req, res);
	}
}