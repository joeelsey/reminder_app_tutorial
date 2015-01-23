'use strict';

var express = require('express');
var app = express();
var moment = require('moment');
var mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL || 'mongod://localhost/reminder_dev');

app.configure(function() {
  app.engine('html', require('ejs').renderFile);
  app.use(require('express-promise')());
  app.use(express.static(process.cwd() + '/public'));
  app.use(express.bodyParser());
})

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
  console.log('server running on port:' + app.get('port') + ' better not let it get away!');
})
