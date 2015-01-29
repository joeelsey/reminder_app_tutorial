Timers.ApplicationSerializer = DS.RESTSerializer.extend({
  primaryKey: '_id'
});

Timers.Store = DS.Store.extend({
  adapter: DS.RESTAdapter.create()
});
