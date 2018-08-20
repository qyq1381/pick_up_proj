let mongoose = require('mongoose');
let CollectionName = 'orders';
let Order = mongoose.model('Order',{
  OrderTime: {
    type: Date,
    default: Date.now
  },
  ContactName:{
  	type: String,
  	trim: true,
  	require: true,
  	minlength: 3 
  },	
  DepartureDate:{
  	type: String,
  	trim: true,
  	require: true,
  	minlength: 3
  },	
  FlightNumber:{
  	type: Number,
  	trim: true,
  	require: true,
  	minlength: 8
  },	
  Location:{
  	type: String,
  	trim: true,
  	require: true,
  	minlength: 3
  },	
  Passenger:{
  	type: {
  		adult: Number,
  		child: Number
  	},
  	trim: true,
  	require: true,
  	minlength: 3
  },	
  Luggage:{
  	type: Number,
  	trim: true,
  	require: true,
  	minlength: 3
  },
  OrderNumber:{
  	type: Number,
  	trim: true,
  	require: true,
  	minlength: 3
  },
  IdNumber:{
  	type: Number,
  	trim: true,
  	require: true,
  	minlength: 3
  },
  PickupTime:{
  	type: String,
  	default: null
  },
  isValidOrder: {
    type: Boolean,
    default: null
  }
},CollectionName);

module.exports = {Order};