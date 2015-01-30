Timers.Timer = DS.Model.extend({
  title: DS.attr('string'),
  isCompleted: DS.attr('boolean'),
  end: DS.attr('date')
});
