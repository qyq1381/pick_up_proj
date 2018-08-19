const {ObjectID} = require('mongodb');
const _ = require('lodash');	//load low_dash library

module.exports={
	getByFilter(Model, filter, req, res){
		Model.find(filter).then((model) => {
			res.send({model});
		}, (err) => {
			res.status(400).send(`The error is "${err}"`);
		}).catch((err)=>{
			res.status(400).send(`The reject error is "${err}"`);
		});
	},

	getById(Model, req, res){
		
		let id = req.params.id;

		if(!ObjectID.isValid(id)){
			return res.status(404).send();
		}
		Model.findById(id).then((model)=>{
			if(!model){
				return res.status(404).send();
			}
			res.send({model});
		}).catch((err)=>{
			res.status(400).send(`bad request made by: ${err}`);
		});
	},

	patchById(Model, pickArray, req, res){
		
		let id = req.params.id;
		let body = _.pick(req.body, pickArray);

		if(!ObjectID.isValid(id)) {
			return res.status(400).send();
		}

		Model.findByIdAndUpdate(id, {$set: body}, {new: true}).then((model)=>{
			if(!model){
				return res.status(404).send();
			}
			res.send({model});
		}).catch((err) => {
			res.status(400).send(`bad request made by: ${err}`);
		});
	},

	deleteById(Model, req, res){
		let _id = req.params.id;

		if(!ObjectID.isValid(_id)){
			return res.status(404).send();
		}
		Model.findByIdAndRemove(_id).then((model) => {
			if(!model){
				return res.status(404).send();
			}
			res.send({model});
		}).catch((err) => {
			res.status(400).send(`bad request made by: ${err}`);
		});
	}
}


