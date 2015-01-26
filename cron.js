'use strict';

module.exports = function(Reminder) {
  var client = require('twilio')(account, authToken);
  var account = process.env.TWILIO_ACCOUNT_ID;
  var authToken = process.env.TWILIO_AUTH_TOKEN;
  var Reminder = require('./models/reminder_model');

  function checkReminders() {
    Reminder.find({'end': { $lt: Date.now()}}, function(err, reminders) {
      console.log('finding jobs');
      //console.log(reminders);
      if (err) return console.log('error: ', err);
      if (!reminders) return console.log('reminder not found');

      reminders.forEach(function(reminder) {
        console.log('sending reminders');
        if(!reminder.isCompleted) {
          client.sms.messages.create({
            body: reminder.title,
            to: '18474775286',
            from: process.env.TWILIO_NUMBER
          }, function(err, message) {
            if (err) return console.log('error: ', err);
            if (!message) return console.log({msg: 'no message'});
            console.log(message);
          });
        }
      });
    });
  };

  setInterval(checkReminders, 60000);
  checkReminders();
  console.log('check cron jobs');
};
