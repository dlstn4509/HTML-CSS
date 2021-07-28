/* 
Object: 객체

함수 선언문
function a() {

}
a();

함수 표현식
var a = function() {

}
a();
*/


// IIFE(즉시실행함수)
(function () {
	console.log('B 실행함');
})();

var c = function() {
	console.log('C 실행함');
}
c();

/* 
- 함수 선언문과 함수 표현식의 차이 
Hoisting(끌어올리다)
함수선언문은 Hoisting의 대상이다
함수표현식은 Hoisting의 대상이 아니다. 왜냐 변수는 호이스팅 대상이 아니다.
*/
console.log("===========");
d();
function d() {
	console.log('D 실행함');
}

var e = function () {
    console.log('E 실행함');
}
e();


/* 
변수를 깊이 들어가 보자
1. 변수에는 모든 것을 넣을 수 있다.
 */

var a;
console.log(a); //underfined

var a = 10;
console.log(a); // 10

a = "A";
console.log(a); // A

a = function() { 
	console.log('a()를 실행함') 
};
console.log(a); // function() {}
a();

// 그래서 변수가 객체(Object)가 될 수 있다.
var human = {
    name: '홍길동',
    age: 20,
    weight: 80,
    height: 180
    run: function() {
        console.log(this.name + '이 뜁니다.');
    }
}
console.log(human.name);
console.log(human.age);
console.log(human.weight);
console.log(human.height);
human.run();