let mongoose = require('mongoose');
const database = 'mongodb://localhost/PickUpFlight'; //database depend on environment 
mongoose.Promise = global.Promise;
mongoose.connect(database)
		.then(() => console.log('connected to mongodb'))
		.catch((err) => console.err("failed to connect mongodb", err));

module.exports = {mongoose};

