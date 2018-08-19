let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let	collectionName = 'Airport';
let AirportSchema = new Schema({
	State: String,
	City: String,
	Airport: String 
});

let Model = mongoose.model('Airport', AirportSchema, collectionName);

module.exports = {Model}; 