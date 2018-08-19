const express = require('express');
const port = 3000;

let {mongoose} = require('./src/db/mongoose');
let {User} = require('./src/models/user');
let {Airport} = require('./src/models/airport');
let app = express();

app.listen(port, ()=>{
	console.log("Started listening port "+port);
});
app.use(require('./src/middleware/middleware'));

require('./src/routers/router')(app);

module.exports = {app};

