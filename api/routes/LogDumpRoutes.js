'use strict';

module.exports = function(app)  {
	var logger = require("../controllers/LogDumpCOntroller.js");
	

	app.route('/logDump')
	    .get(logger.getLogs)
		.post(logger.saveLog);
}

 
