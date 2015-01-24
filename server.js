'use strict';

var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var Reminder = require('./models/reminder_model');

mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost/reminder_dev');


app.engine('html', require('ejs').renderFile);
app.use(require('express-promise')());
app.use(express.static(process.cwd() + '/public'));
app.use(bodyparser.json());

require('./routes/index')(app);
require('./cron')(Reminder);

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
  console.log('server running on port:' + app.get('port') + ' better not let it get away!');
});
