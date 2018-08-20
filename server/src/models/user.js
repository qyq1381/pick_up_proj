let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let collectionName = 'User';
let UserSchema = new Schema({
	
	UserName: {
		type: String,
		trim: true,
		//require: true,
		//minlength: 1
	},
	UserPsw: {
		type: String,
		trim: true
		//require : true,
		//minlength: 8
	},
	Email: {
		type: String,
		trim: true
		//require: false,
		//minlength: 1
	},
	Phone: {
		type: String,
		trim: true
		//require: true
		
	},
	IdNumber: {
		type: Number
		//default: 10000
	}
});

let User = mongoose.model('User', UserSchema, );

module.exports = {User};