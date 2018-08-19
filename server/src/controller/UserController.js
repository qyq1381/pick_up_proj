console.log('UserController works');
const {User} = require('../models/user');
const {ObjectID} = require('mongodb');
const _ = require('lodash');	//load low_dash library

module.exports = {
	post(req, res){
		var user = new User({
			UserName: req.body.UserName,
			UserPsw: req.body.UserPsw,
			Email: req.body.Email,
			Phone: req.body.Phone,
			IdNumber: req.body.IdNumber
		});
		user.save().then((doc) => {
			res.status(200).send(doc);
		}, (err) => {
			res.status(400).send(err);
		});
	},

	get (req, res) {
		User.find().then((user) =>	{
			res.send({user});
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
		User.findById(id).then((todo)=>{
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
		var body = _.pick(req.body, ['UserName', 'Email','Phone','UserPsw']);

		if(!ObjectID.isValid(id)) {
			return res.status(400).send();
		}

		User.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo)=>{
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
		User.findByIdAndRemove(_id).then((todo) => {
			if(!todo){
				return res.status(404).send();
			}
			res.send({todo});
		}).catch((err) => {
			res.status(400).send(err);
		});
	}
}