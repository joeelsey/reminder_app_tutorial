'use strict';

module.exports = function(Reminder) {
  var account = process.env.TWILIO_ACCOUNT_SID;
  var authToken = process.env.TWILIO_AUTH_TOKEN;
  var client = require('twilio')(account, authToken);

  function checkReminders() {
    Reminder.find({'end': { $lt: Date.now()}}, function(err, reminders) {
      console.log('finding jobs');
      if (err) return console.log('error: ', err);
      if (!reminders) return console.log('reminder not found');

      reminders.forEach(function(reminder) {
        console.log('sending reminders');
        if(!reminder.isCompleted) {
          client.sms.messages.create({
            body: reminder.title,
            to: process.env.MOBILE,
            from: process.env.TWILIO_NUMBER
          }, function(err, message) {
            if (err) return console.log('error: ', err);
            if (!message) return console.log({msg: 'no message'});
            console.log(message);
            console.log(message.date_created);
          });
        }
      });
    });
  }

  setInterval(checkReminders, 60000);
  checkReminders();
  console.log('check cron jobs');
};
