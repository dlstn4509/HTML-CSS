/* 
- 비교연산자
==, ===, <=, >=, <, > (===은 타입까지 같아야 함). !=. !==

- 내장객체
window, console, String, Number, Array, Object, Date, Math
window.document
*/

console.log(window);
console.log(console);
console.log(String);
console.log(Number);
console.log(Array);
console.log(Object);
console.log(Date);
console.log(Math);

/* 
var a=10;
if(typeof a !== 'number') {
  console.log(`변수 a는 숫자가 아닙니다.`)
}
else if(a<10) {
  console.log(`변수 a는 10 미만의 수 입니다.`);
}
else if(a<10) {
  console.log('변수 a는 10 이상의 수 입니다.');
}

else {
  console.log (`변수 a는 10 입니다.`);
}
*/



/* function changeColor(value) {
  // alert(value === '');
  console.log(document.getElementById('box'))
  if(value === '') {
    console.log('value가 빈문자열 입니다.');
    document.getElementById('box').style.backgroundColor = 'transparent';
  }
  else {
    console.log('value는' + value + '입니다.');
    document.getElementById('box').style.backgroundColor = value;
  }
} */

function changeColor(value) {
  console.log(document.getElementById('box'))
  if(value === '') {
    document.getElementById('box').style.backgroundColor = 'transparent';
  }
  else {
    document.getElementById('box').style.backgroundColor = value;
  }
}

console.clear();

function showImg(src) {
  document.getElementById('mainImg').src = src;
}