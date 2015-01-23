'use strict';

var mongoose = require('mongoose');
var moment = require('moment');

var reminderSchema = mongoose.Schema({
  title: String,
  isCompleted: Boolean,
  end: {
    type: Date, default: moment().add('hours', 1).toDate()
  }
});

module.exports = mongoose.model('Reminder', reminderSchema);
