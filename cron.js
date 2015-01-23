'use strict';

module.exports = function(Reminder) {
  var client = require('twilio')(accountSid, authToken);
  var accountSid = process.env.TWILIO_ID;
  var authToken = process.env.TWILIO_TOKEN;
  var Reminder = require('models/reminder_model');

  function checkReminders() {
    Reminder.find({'end': { $lt: Date.now()}}, function(err, reminders) {
      if (err) return res.status(500).send(err);
      if (!reminders) return res.send({msg: 'nothing found'});

      reminders.forEach(function(reminder) {
        if(!reminder.isCompleted) {
          client.sms.messages.create({
            body: reminder.title,
            to: process.env.MOBILE,
            from: process.env.TWILIO_NUMBER
          }, function(err, message) {
            if (err) return res.status(500).send(err);
            if (!message) return res.send({msg: 'no message'});
            res.json(message);
          });
        }
      });
    });
  };

  setInterval(checkReminders, 60000);
  checkReminders();
};
