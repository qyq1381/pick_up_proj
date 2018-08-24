const express = require('express');
const port = process.env.PORT || 3000 ;
const bodyParser = require('body-parser');

let {mongoose} = require('./src/db/mongoose');
let app = express();

app.listen(port, ()=>{
	console.log("Started listening port "+port);
});

//app.use(require('./src/middleware/middleware'));
app.use(express.static('public'));
app.use(bodyParser.json());
//solved bug "Access-Control-Allow-Origin"
app.use(function(req, res, next) { 
	res.header("Access-Control-Allow-Origin", "*"); 
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); 
	next(); 
});
<<<<<<< HEAD

=======
>>>>>>> 10253ceb18a4cb2417f4e8cfbcd932c5ff751159

require('./src/routers/router')(app);

module.exports = {app};

