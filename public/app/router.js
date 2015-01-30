Reminder.Router.map(function() {
  this.resource('time', {path: '/'}, function() {
    this.route('active');
    this.route('completed');
  });
});


