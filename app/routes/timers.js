Timers.TimersRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('timer');
  }
});
