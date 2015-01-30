Reminder.Store = DS.Store.extend({
  revision: 12,
  adapter: Reminder.RESTAdapter
});


Reminder.RESTAdapter = DS.RESTAdapter.extend({
  url: 'http://localhost:3000',
  serializer: DS.RESTSerializer.extend({
    primaryKey: function(type) {
      return '_id'
    }
  })
});
