const {ObjectID} = require('mongodb');
const _ = require('lodash');	//load low_dash library
const {User, validateUser} = require('../models/user');

module.exports={
	
	async postModel(req, res){
		/* input valid checking
		const {error} = validateUser(req.body);
		console.log(error);
		if (error) return res.status(401).send(error.details[0].message);
		*/

		let user = await User.findOne({Email: req.body.email});
		if (user) return res.status(400).send(`${req.body.email} already registered.`)

		let createTime = new Date();
		let idNumber = getUserNumber(createTime);
		user = new User({
			firstName:req.body.firstName,
			lastName: req.body.lastName,
			Email:req.body.email,
			Phone:req.body.phone,
			WeChat: req.body.wechat,
			IdNumber: idNumber,
			CreateTime: createTime.getTime(),
			CreateTime_uni: createTime.getTime()
		});
		user.save().then((doc) => {
			res.send(doc);
		}, (err) => {
			res.status(400).send(err);
		});
	},

	getByFilter(filter, res){
		User.find(filter).then((model) => {
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
		User.findById(id).then((model)=>{
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

		User.findByIdAndUpdate(id, {$set: body}, {new: true}).then((model)=>{
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
		User.findByIdAndRemove(_id).then((model) => {
			if(!model){
				return res.status(404).send();
			}
			res.send({model});
		}).catch((err) => {
			res.status(400).send(`bad request made by: ${err}`);
		});
	}

}

function getUserNumber(createtime){
	let timeStamp="";  
	for(let i=0;i<3;i++) 
	{
		timeStamp += Math.floor(Math.random()*10);
	}
	return createtime.getTime().toString() + timeStamp;

}
