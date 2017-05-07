var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    LogData = require('./api/models/LogDumpModel'),
    bodyParser = require('body-parser');
    
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/LogDumpDB');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var routes = require('./api/routes/LogDumpRoutes');
routes(app);

app.listen(port);

console.log('LogDum server started on : ' + port);

