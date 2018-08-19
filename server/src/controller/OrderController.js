console.log('OrderController works');
const {Order} = require('../models/order');
const {ObjectID} = require('mongodb');
const _ = require('lodash');	//load low_dash library
const orderMethod = require('../services/orderMethod'); 
const commonMethod = require('../services/commonMethod');


module.exports = {
	post(req, res){
		orderMethod.postOrder(Order, req, res);
	},

	get(req, res) {
		const filter = {
			//write filter
			isValidOrder:true
		}
		commonMethod.getByFilter(Order, filter, req, res);
	},

	getById(req, res) {
		commonMethod.getById(Order, req, res);
	},

	patchById(req, res){
		let pickArray = ['ContactName', 'DepartureDate',
						'FlightNumber','Location',
						'Passenger','Luggage',
						'OrderNumber','IdNumber','PickupTime'];
		commonMethod.patchById(Order, pickArray, req, res);
	},

	deleteById(req, res){
		commonMethod.deleteById(Order, req, res);
	}
}