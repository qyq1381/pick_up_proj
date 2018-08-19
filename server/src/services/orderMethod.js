const {ObjectID} = require('mongodb');
const _ = require('lodash');	//load low_dash library

module.exports ={
	postOrder(Order,req, res){
	let order = new Order({
			ContactName: req.body.ContactName,
			DepartureDate: req.body.DepartureDate,
			FlightNumber: req.body.FlightNumber,
			Location: req.body.Location,
			Passenger: req.body.Passenger,
			Luggage: req.body.Luggage,
			OrderNumber: req.body.OrderNumber,
			IdNumber: req.body.IdNumber,
			PickupTime: req.body.PickupTime,
			isValidOrder: req.body.isValidOrder,
		});
		order.save().then((doc) => {
			res.send(doc);
		}, (err) => {
			res.status(400).send(err);
		});
	}
}
