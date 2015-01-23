'use strict';

module.exports = function(app) {

  var Reminder = require('./models/reminder_model');

  app.get('/', function(req, res) {
    res.json('Hello World');
  });
};
