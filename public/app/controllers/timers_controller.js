Timers.TimersController = Ember.ArrayController.extend({
  actions: {
    createTimer: function() {
      var title = this.get('newTitle');
      if(!title.trim()) {
        return;
      }
      var timer = this.store.createRecord('timer', {
        title: title,
        isCompleted: false,
        end: moment().add(1, 'hours').toDate()
      });
      console.log(title);
      console.log(timer);
      this.set('newTitle', '');
      timer.save();
    }
  }
  
});
