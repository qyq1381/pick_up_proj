var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/PickUpFlight')
		.then(() => console.log('connected to mongodb'))
		.catch((err) => console.err("failed to connect mongodb", err));

module.exports = {mongoose};

