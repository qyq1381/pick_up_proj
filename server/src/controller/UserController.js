const {ObjectID} = require('mongodb');
const _ = require('lodash');	//load low_dash library
const service = require('../services/userService');

module.exports = {
	post(req, res){
		service.postModel(req, res);
	},

	postByReg(req, res){
		service.postRegister(req, res);
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
		let pickArray = ['userName', 'Email','Phone','Password'];
		service.patchById(pickArray, req, res);
	},

	deleteById(req, res){
		service.deleteById(req, res);
	}
}