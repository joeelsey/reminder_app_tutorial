Timers.TimersController = Ember.ArrayController.extend({
  createTimer: function() {
    var title = this.get('newTitle');
    if(!title.trim()) {
      return;
    }
    var timer = this.store.createRecord('timer', {
      title: title,
      isCompleted: false,
      end: moment().add('hours').toDate();
    });

    this.set('newTitle', '');
    timer.save();
  };
});
