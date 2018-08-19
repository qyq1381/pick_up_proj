console.log('AirportController works');
const {Airport} = require('../models/airport');
const {ObjectID} = require('mongodb');
const _ = require('lodash');	//load low_dash library


module.exports = {
	post(req, res){
	var airport = new Airport({
		State: req.body.state,
		City: req.body.city,
		Airport: req.body.airport 
	});
	airport.save().then((doc) => {
		res.send(doc);
	}, (err) => {
		res.status(400).send(err);
	})
},

	get (req, res) {
		Airport.find().then((airport) =>	{
			res.send({airport});
		}, (err) => {
			res.status(400).send(err);
		}).catch((err)=>{
			res.status(400).send(err);
		});
	},

	getById (req, res) {
		var id = req.params.id;

		if(!ObjectID.isValid(id)){
			return res.status(404).send();
		}
		Airport.findById(id).then((todo)=>{
			if(!todo){
				return res.status(404).send();
			}
			res.send({todo});
		}).catch((err)=>{
			res.status(400).send(err);
		});
	},

	patchById(req, res){
		var id = req.params.id;
		var body = _.pick(req.body, ["state", "city", "airport"]);

		if(!ObjectID.isValid(id)) {
			return res.status(400).send();
		}

		Airport.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo)=>{
			if(!todo){
				return res.status(404).send();
			}
			res.send({todo});
		}).catch((err) => {
			res.status(400).send(err);
		});
	},

	deleteById(req, res){
		var _id = req.params.id;

		if(!ObjectID.isValid(_id)){
			return res.status(404).send();
		}
		Airport.findByIdAndRemove(_id).then((todo) => {
			if(!todo){
				return res.status(404).send();
			}
			res.send({todo});
		}).catch((err) => {
			res.status(400).send(err);
		});
	}
}