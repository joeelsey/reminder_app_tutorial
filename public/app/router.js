Timers.Router.map(function() {
  this.resource('timers', {path: '/'}, function() {
    this.resource('active');
    this.resource('completed');
  });
});
