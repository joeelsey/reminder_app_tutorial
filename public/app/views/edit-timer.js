Reminder.EditTimerView = Ember.TextField.extend({
  didInsertElement: function() {
    this.$().focus();
  }
});

Ember.Handlebars.helper('edit-timer', Timers.EditTimerView);
