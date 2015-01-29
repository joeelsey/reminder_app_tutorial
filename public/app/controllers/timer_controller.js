Timers.TimerController = Ember.ObjectController.extend({
  isCompleted: function(key, value) {
    var model = this.get('model');
    if (typeof value === 'undefined') {
      return model.get('isCompleted');
    } else {
      model.set('isCompleted', value);
      model.save();
      return value;
    }
  }.property('model.isCompleted'),

  from: function() {
    var self = this;

    setInterval(function() {
      self.set('from', moment(self.get('end')).fromNow());
    }, 1000);
  },

  formattedEnd: function(key, value) {
    var model = this.get('model');
    if(typeof value === 'undefined') {
      return moment(model.get('end')).format('YYYY-MM-DD HH:mm');
    } else {
      model.set('end', value);
      return value;
    }
  }.property('model.end'),

  actions: {
    editTimer: function() {
      this.set('isEditing', true);
    },

    acceptChanges: function() {
      this.set('isEditing', false);

      if(Ember.isEmpty(this.get('model.title'))) {
        this.send('removeTimer');
      } else {
        this.get('model').set('end', moment(this.get('model').get('end')).toDate());
        this.get('model').save();
      }
    },

    removeTimer: function() {
      var timer = this.get('model');
      timer.destroyRecord();
    }
  },

  isEditing: false
});
