Reminder.TimersRoute = Ember.Route.extend({
  controllerName: 'time',
  model: function() {
    return this.store.find('time');
  }
});
