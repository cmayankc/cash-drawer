var express 		= require('express');
var logger          = require('morgan');
var bodyParser      = require('body-parser');
var errorHandler    = require('errorhandler');
var log 			= console.log;
var printer 		= require('./printer');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(errorHandler({ dumpExceptions: true, showStack: true }));

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.get('/status', function(req, res) {
	res.send('reachable');
})

app.post('/openCashDrawer', function(req, res) {
	try {
		printer.openDrawer(req);
	} catch(err) {
		throw 'Error opening Drawer: ' + err;
	}
})

app.listen(4000, function() {
	log('Server running on port 4000..');
});