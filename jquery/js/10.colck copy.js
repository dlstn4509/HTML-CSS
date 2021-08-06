
(function time (){
  document.querySelector('.date-wp').innerHTML = moment().format('YYYY년MM월DD일.ddd');
  document.querySelector('.time-wp').innerHTML = moment().format('HH시mm분ss초');
  document.querySelector('.timestamp-wp').innerHTML = moment().toDate().getTime();
})();

setInterval(time, 1000)