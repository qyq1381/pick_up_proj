let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let CollectionName = 'Order';
let orderSchema = new Schema({
  orderTime: {
    type: Date,
  },
  orderTime_uni: {
    type: Number
  },
  departureDate:{
    type: Date,
    require: true,
  },  
  flightNumber:{
    type: String,
    trim: true
  },  
  Passenger:{
    type: Number,
    require: true
  },  
  largeLuggage:{
    type: Number,
    require: true
  },
  smallLuggage: {
    type: Number,
    require: true
  },
  orderNumber:{
    type: String,
  },
  Address: {

            address_line_1: String,
            address_line_2: String,
            city: String,
            state: String,
            zip: Number,
            country: String
  }
});
let Order = mongoose.model('Order', orderSchema, CollectionName);

module.exports = {Order};