const mongoose = require('mongoose');
const config = require('config');
const database = config.get('configuration.database'); //database depend on environment
console.log(database); 
mongoose.Promise = global.Promise;
mongoose.connect(database)
		.then(() => console.log(`connected to ${database}...`))
		.catch((err) => console.err("failed to connect mongodb", err));

module.exports = {mongoose};

