Timers.Router.map(function() {
  this.resource('timers', {path: '/'}, function() {
    this.route('active');
    this.route('completed');
  });
  this.resource('timers');
  this.resource('timers-index');
});


