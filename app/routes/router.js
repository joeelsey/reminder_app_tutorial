Timers.Router.map(function() {
  this.resource('timers', {path: '/index'}, function() {
    this.route('active');
    this.route('completed');
  })
})
