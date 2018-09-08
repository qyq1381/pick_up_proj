let mongoose = require('mongoose');
let Joi = require('joi');
let Schema = mongoose.Schema;
let collectionName = 'User';
let UserSchema = new Schema({
	
	firstName: {
		type: String,
		trim: true,
		//require: true
	},
	lastName:{
		type: String,
		trim: true,
	},
	userName:{
		type: String,
		trim: true,
		minlength: 6,
		maxlength: 20
	},
	Password:{
		type: String,
		trim: true,
		default: null
	},
	Email: {
		type: String,
		trim: true,
		unique: true, //won't save same email in mongodb
		required: true
	},
	Phone: {
		type: Number,
		trim: true,
		default: null,
		unique: true,
	},
	WeChat: {
		type: String,
		trim: true,
		default: "null"
	},
	IdNumber: {
		type: Number,
		default: 10000
	},
	CreateTime: {
		type: Date
	},
	CreateTime_uni: {
		type: Number,
	}
});

let User = mongoose.model('User', UserSchema, collectionName);

function validateUser(user) {
	let InfoToBeChecked = {
		email: user.email,
		password: user.password
	}
	const schema = {
		email: Joi.string().email(),
		password: Joi.string().regex(
			new RegExp('^[a-zA-Z0-9]{8,32}$')
		)
	}
	return Joi.validate(InfoToBeChecked, schema);

}
module.exports = {User, validateUser};