const {ObjectID} = require('mongodb');
const _ = require('lodash');	//load low_dash library
const service = require('../services/orderService');

module.exports = {
	post(req, res){
		service.postModel(req, res);
	},
	
	// get(req, res) {
	// 	//filter should come from request
	// 	const filter = {
	// 		//write filter
	// 	}
	// 	service.getByFilter(filter, req, res);
	// },

	get(req,res) {
		service.getAll(req,res)
	},

	getById(req, res) {
		service.getById(req, res);
	},

	patchById(req, res){
		//pickArray should come from request

		let pickArray = [
			'flightNumber', 
			'Passenger', 
			'largeLuggage', 
			'smallLuggage', 
			'departureDate',
			'address_line_1', 
			'address_line_2', 
			'city', 
			'state', 
			'zip', 
			'country'
		  ];
		service.patchById(pickArray, req, res);
		// service.patchById(pickArray1, pickArray2, req, res);
	},
	
	deleteById(req, res){
		service.deleteById(req, res);
	},	
}