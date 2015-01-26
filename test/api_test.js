'use strict';

process.env.MONGO_URL = 'mongodb://localhost/reminder_test';
var chai = require('chai');
var chaihttp = require('chai-http');
var Reminder = require('../models/reminder_model');

chai.use(chaihttp);

require('../server.js');

var expect = chai.expect;
var localhost = 'http://localhost:3000';

Reminder.collection.remove(function(err) {
  if (err) throw (err);
});

describe('test the reminder api', function() {
  var id;
  var message = {
    timer: {
      title: 'This is Message Two',
      end: 'Mon Jan 27 2015 08:35'
    }
  };

  var altmessage = {
    timer: {
      title: 'This is Message Three',
      end: 'Mon Jan 28 2015 08:35'
    }
  };

  it('should create a message', function(done) {
    chai.request(localhost)
    .post('/timers')
    .send(message)
    .end(function(err, res) {
      id = res.body.timer._id;
      console.log(id);
      expect(err).to.eql(null);
      expect(res.body).to.have.property('timer');
      done();
    });
  });

  it('should get all messages', function(done) {
    chai.request(localhost)
    .get('/timers')
    .end(function(err, res) {
      expect(err).to.eql(null);
      expect(Array.isArray(res.body.timers)).to.eql(true);
      done();
    });
  });

  it('should get one message', function(done) {
    chai.request(localhost)
    .get('/timers/' + id)
    .end(function(err, res) {
      expect(err).to.eql(null);
      expect(res.body._id).to.equal(id);
      expect(res.body).to.have.property('title');
      done();
    });
  });

  it('should change the message', function(done) {
    chai.request(localhost)
    .put('/timers/' + id)
    .send(altmessage)
    .end(function(err, res) {
      expect(err).to.eql(null);
      expect(res.body).to.have.property('timer');
      expect(res.body.timer.title).to.equal('This is Message Three');
      done();
    });
  });

  it('should delete the message', function(done) {
    chai.request(localhost)
    .delete('/timers/' + id)
    .end(function(err, res) {
      expect(err).to.eql(null);
      expect(res.body.msg).to.equal('reminder deleted');
      done();
    });
  });
});
