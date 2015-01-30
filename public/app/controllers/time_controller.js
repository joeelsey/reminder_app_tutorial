Reminder.TimeController = Ember.ArrayController.extend({
  actions: {
    createTimer: function() {
      
      var title = this.get('newTitle');
        if(!title.trim()) {
          return;
        }
      var timer = this.store.createRecord('time', {
        title: title,
        isCompleted: false,
        end: moment().add(1, 'hours').toDate()
      });
      
      this.set('newTitle', '');
      timer.save();
    }
  } 
});
