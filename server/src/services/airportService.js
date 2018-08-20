const {ObjectID} = require('mongodb');
const _ = require('lodash');	//load low_dash library
const {Airport} = require('../models/airport');

module.exports={
	
	postModel(req, res){
		let airport = new Airport(req.body);
		airport.save().then((doc) => {
			res.send(doc);
		}, (err) => {
			res.status(400).send(err);
		});
	},

	getByFilter(filter, res){
		Airport.find(filter).then((model) => {
			res.send({model});
		}, (err) => {
			res.status(400).send(`The error is "${err}"`);
		}).catch((err)=>{
			res.status(400).send(`The reject error is "${err}"`);
		});
	},

	getById(req, res){
		
		let id = req.params.id;

		if(!ObjectID.isValid(id)){
			return res.status(404).send();
		}
		Airport.findById(id).then((model)=>{
			if(!model){
				return res.status(404).send();
			}
			res.send({model});
		}).catch((err)=>{
			res.status(400).send(`bad request made by: ${err}`);
		});
	},

	patchById(pickArray, req, res){
		let id = req.params.id;
		let body = _.pick(req.body, pickArray);

		if(!ObjectID.isValid(id)) {
			return res.status(400).send();
		}

		Airport.findByIdAndUpdate(id, {$set: body}, {new: true}).then((model)=>{
			if(!model){
				return res.status(404).send();
			}
			res.send({model});
		}).catch((err) => {
			res.status(400).send(`bad request made by: ${err}`);
		});
	},

	deleteById(req, res){
		let _id = req.params.id;

		if(!ObjectID.isValid(_id)){
			return res.status(404).send();
		}
		Airport.findByIdAndRemove(_id).then((model) => {
			if(!model){
				return res.status(404).send();
			}
			res.send({model});
		}).catch((err) => {
			res.status(400).send(`bad request made by: ${err}`);
		});
	}
}


