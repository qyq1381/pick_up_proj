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
		type: String,
		trim: true,
		default: null,
		unique: true,
	},
	WeChat: {
		type: String,
		trim: true,
		default: null,
		unique: true
	},
	IdNumber: {
		type: Number
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
	console.log(user);
	const schema = {
		email: Joi.string().min(5).max(50).required().email()
	}
	console.log(`Joi validate decision is: ${Joi.validate(user, schema)}`);
	return Joi.validate(user, schema);

}
module.exports = {User, validateUser};