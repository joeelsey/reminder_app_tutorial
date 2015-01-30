Reminder.TimersIndexRoute = Ember.Route.extend({
  model: function() {
    return this.modelFor('time');
  }
});
