let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let collectionName = 'User';
let UserSchema = new Schema({
	
	firstName:{
		type: String,
		trim: true
	}
	lastName: {
		type: String,
		trim: true
	}
	Email: {
		type: String,
		trim: true,
		require: true
	},
	Phone: {
		type: String,
		trim: true
	},
	WeChat: {
		type: String,
		trim: true
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

module.exports = {User};