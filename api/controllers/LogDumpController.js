'use strict';

var mongoose = require('mongoose'),
	LogData = mongoose.model('LogData');

exports.getLogs = function(req, res) {
	console.log('getLogs');
	LogData.find({}, function(err, log) {
		if (err) {
			res.send(err);
		}
		res.json(log);
	});
}

exports.saveLog = function(req, res) {
	console.log('saveLog');
	var logData = new LogData(req.body);
	logData.save(function(err, log) {
		if (err) {
			console.log('Error in saveLog : ' + err);
			res.send(err);
		}
		res.json(log);
	});
}

