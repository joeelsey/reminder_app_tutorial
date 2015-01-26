var moment = require('moment');

function Time() {
  console.log(moment().add('hours').toDate());
  console.log(process.env.MOBILE);
};

Time();
