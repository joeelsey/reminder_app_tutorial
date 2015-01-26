var moment = require('moment');

function Time() {
  console.log(moment().add('hours').toDate());
};

Time();
