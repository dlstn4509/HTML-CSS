/* 
- 비교연산자
==, <=, >=, < , >, === (타입까지 같아야 함), != , !==

- 내장객체
window, console, String, Number, Array, Object, Date, Math

- 변수의 타입
var b = 10;
var c = '10'
var d = function() {}
var e = true
var f = {}

typeof b    =>    "number"
typeof c    =>    "string"
typeof d    =>    "function"
typeof e    =>    "boolean"
typeof f    =>    "object"
*/

/*
var a = 8;
if(typeof a !== 'number') {
	console.log('변수 a는 숫자가 아닙니다.');
}
else if(a < 10) {
	console.log('변수 a는 10 미만의 수 입니다.');
}
else if(a > 10) {
	console.log('변수 a는 10 초과의 수 입니다.');
}
else {
	console.log('변수 a는 10 입니다.')
}
*/


// window.alert('hi');
console.log(window);
console.log(window.document);
console.log(document);
console.log(console);
console.log(String);
console.log(Number);
console.log(Array);
console.log(Object);
console.log(Date);
console.log(Math);

/* function changeColor(value) {
	// alert(value === '');
	console.log(document.getElementById('box'));
	if(value === '') {
		console.log('value는 빈문자열 입니다.');
		document.getElementById('box').style.backgroundColor = 'transparent';
	}
	else {
		console.log('value는 ' + value + '입니다.');
		document.getElementById('box').style.backgroundColor = value;
	}
} */

function changeColor(value) {
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
