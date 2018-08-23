let mongoose = require('mongoose');
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
	Email: {
		type: String,
		trim: true,
		unique: true,
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
		default: null
	},
	IdNumber: {
		type: Number,
		unique: true,
	},
	CreateTime: {
		type: Date
	},
	CreateTime_uni: {
		type: Number,
	}
});

let User = mongoose.model('User', UserSchema, collectionName);

module.exports = {User};