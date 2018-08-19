var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AirportSchema = new Schema({
	State: String,
	City: String,
	Airport: String 
});

var Airport = mongoose.model('Airport', AirportSchema);

module.exports = {Airport}; 