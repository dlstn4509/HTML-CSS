let d = new Date(); // 객체의 Instance
console.log(d);
console.log(d.__proto__);
console.log(d.getFullYear());       // 2021
console.log(d.getMonth());          // 0 ~ 11
console.log(d.getDate());           // 3
console.log(d.getDay());            // 0(Sunday) ~ 6
console.log(d.getHours());          // 24시간제 (0 ~ 23)
console.log(d.getMinutes());        // 0 ~ 59
console.log(d.getSeconds());        // 0 ~ 59
console.log(d.getTime());           // timestamp (1970.01.01. 00:00:00) - 기준으로 현 시점까지 흘러온 초(16억), 밀리초(1초6천억) // 자바스크립트: ms, 자바: s

let nowDate = d.getFullYear() + '-' + zp((d.getMonth() + 1)) + '-' + zp(d.getDate()) + ' ' + zp(d.getHours()) + ':' + zp(d.getMinutes()) + ':' + zp(d.getSeconds());

console.log(nowDate);  //  ISO 표준시 (국제 표준시간 표기)

function oninterval() {
  /*
  let yoil = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  let d = new Date();
  let date = d.getFullYear() + '-' + zp((d.getMonth() + 1)) + '-' + zp(d.getDate()); 
  let time = zp(d.getHours()) + ':' + zp(d.getMinutes()) + ':' + zp(d.getSeconds());
  document.querySelector('.date-wp').innerHTML = date + '. ' + yoil[d.getDay()];
  document.querySelector('.time-wp').innerHTML = time;
}
*/
  document.querySelector('.date-wp').innerHTML = moment().format('Y년MM월DD일. ddd');
  document.querySelector('.time-wp').innerHTML = moment().format('HH시mm분ss초')
  document.querySelector('.timestamp-wp').innerHTML = new Date().getTime();
}
setInterval(oninterval, 1000);