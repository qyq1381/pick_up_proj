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
  depatureDate:{
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
});
let Order = mongoose.model('Order', orderSchema, CollectionName);

module.exports = {Order};