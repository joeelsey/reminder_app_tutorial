Timers = Ember.Application.create();

Timers.ApplicationSerializer = DS.RESTSerializer.extend({
  primaryKey: '_id'
});

Timers.Store = DS.Store.extend();
