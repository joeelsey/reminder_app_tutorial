Reminder.TimeController = Ember.ArrayController.extend({
  actions: {
    createTimer: function() {
      console.log('createtimer');
      var timer = this.store.createRecord('time', {
        title: this.get('newTitle'),
        isCompleted: false,
        end: moment().add(1, 'hours').toDate()
      });

      this.set('newTitle', '');
      timer.save();
    }
  } 
});
