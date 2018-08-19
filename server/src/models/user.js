var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	
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

var User = mongoose.model('User', UserSchema);

module.exports = { User };