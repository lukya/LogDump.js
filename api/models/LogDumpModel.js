'use strict';

var mongoose = require('mongoose')
var Schema = mongoose.Schema

var LogSchema = new Schema({

	logText: {
		type: String,
		Required: 'Missing log text'
	},
	module: {
		type: String
	},
	date_logged: {
		type: Date,
		default: Date.now
	},
	logLevel: {
		type: [{
			type: String,
			enum: ['Trace','Debug','Info','Warning','Error']
		}],
		default: ['Info']
	}
});

module.exports = mongoose.model('LogData', LogSchema);


