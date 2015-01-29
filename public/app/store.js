Timers.ApplicationSerializer = DS.LSSerializer.extend();
Timers.ApplicationSerializer = DS.RESTSerializer.extend({
  primaryKey: '_id'
});
Timers.ApplicationAdapter = DS.LSAdapter.extend();
