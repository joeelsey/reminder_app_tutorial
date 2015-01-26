'use strict';

module.exports = function(app) {

  var Reminder = require('../models/reminder_model');

  app.get('/', function(req, res) {
    res.json('Hello World');
  });

  app.get('/index', function(req, res) {
    res.render('index.html');
  });

  app.get('/timers', function(req, res) {
    res.json({timers: Reminder.find().select('-__v')});
  })

  app.post('/timers', function(req, res) {
    var reminder = new Reminder();
    reminder.title = req.body.timer.title;
    //format is Day Mon Day# Year Time in 24hr
    reminder.end = new Date(req.body.timer.end);
    reminder.save(function(err, data) {
      if (err) return res.status(500).send(err);
      if (!data) return res.send({msg: 'data did not save'});
      console.log('saved!');
    });
    res.json({'timer': reminder});
  });

  app.put('/timers/:id', function(req, res) {
    Reminder.findById(req.params.id, function(err, reminder) {
      if (err) return res.status(500).send(err);
      if (!reminder) return res.send({msg: 'no reminder found'});

      reminder.title = req.body.timer.title;
      reminder.isCompleted = req.body.timer.isCompleted;
      reminder.end = req.body.timer.end;
      reminder.save(function(err, data) {
        if (err) return res.status(500).send(err);
        if (!data) return res.send({msg: 'data did not save'});
        console.log('saved!')
      });
      res.json({'timer': reminder});
    });
  });

  app.delete('/timers/:id', function(req, res) {
    Reminder.findById(req.params.id, function(err, reminder) {
      if (err) return res.status(500).send(err);
      if (!reminder) return res.send({msg: 'no reminder found'});
      res.json({msg: 'reminder deleted'});
    });
  });

};
