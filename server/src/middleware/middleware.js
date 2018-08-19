const _ = require('lodash');	//load low_dash library
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');
let app = express.Router();

app.use(express.static('public'));

app.use(bodyParser.json());
//solved bug "Access-Control-Allow-Origin"
app.use(function(req, res, next) { 
	res.header("Access-Control-Allow-Origin", "*"); 
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); 
	next(); 
});

module.exports = app;