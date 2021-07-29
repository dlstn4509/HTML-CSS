

/* 
console.log(Math.abs(-1));      // 절대값
console.log(Math.floor(4.9));   // 소수점 이하 버림
console.log(Math.ceil(4.1));    // 소수점 이하 올림
console.log(Math.round(4.5));   // 반올림
console.log(Math.random());     // 0 ~ 0.9999999 까지의 난수를 발생 (랜덤)
*/

/* 
1 ~ 45까지의 난수 발생
console.log(Math.floor(Math.random() * 45));   //   0 ~ 44
console.log(Math.floor(Math.random() * 45)+1); //   1 ~ 45
*/

/*
200 ~ 299까지의 난수 발생
console.log(Math.random() * 100);  // 0 ~ 99.99999999
console.log(Math.floor(Math.random() * 100));  // 0 ~ 99
console.log(Math.floor(Math.random() * 100)+200);  // 200 ~ 299
*/



/*
console.log(random(1,45));
*/





/* 
Array
- arr.length : 배열요소의 갯수
- arr.push('값') : 배열의 맨 뒤에 값을 넣는다.
- arr.unshift('값') : 배열의 맨 앞에 값을 넣는다.
- arr.pop() : 배열의 맨 뒤의 값을 뽑아낸다 (배열이 변한다.)
- arr.shift() : 배열의 맨 앞의 값을 뽑아낸다 (배열이 변한다.)
- arr.splice(idx, 빼고싶은 갯수, 넣을 값) : 배열의 중간에 값을 넣거나 빼거나 교체한다. 
*/

var arr = ['A', 'B'];

console.log(arr);                      //  ['A', 'B']

arr.push('C');               
console.log(arr);                      //  ['A', 'B', 'C']

arr.unshift('Z')             
console.log(arr);                      //  ['Z', 'A', 'B', 'C']

console.log(arr[2]);                   // B
console.log(arr);                      // ['Z', 'A', 'B', 'C']

console.log(arr.pop())                 // C 
console.log(arr);                      // ['Z', 'A', 'B']

console.log(arr.shift())               // Z 
console.log(arr);                      // ['A', 'B']



var fruits = ['apple', 'banana', 'cherry']
// 값을 넣기만 함
console.log(fruits.splice(1, 0, 'melon')) // [] (꺼내는 값들을 새로운 배열에 리턴한다)
console.log(fruits);                      // ['apple', 'melon', 'banana', 'cherry']

var fruits = ['apple', 'banana', 'cherry']
// 값을 빼기만 함
console.log(fruits.splice(1, 1))          // ['banana'] 
console.log(fruits);                      // ['apple', 'cherry']

var fruits = ['apple', 'banana', 'cherry']
// 값을 교체 함
console.log(fruits.splice(1, 1, 'melon', 'orange'))  // ['banana'] 
console.log(fruits);                                 // ["apple", "melon", "orange", "cherry"]

var fruits = ['apple', 'banana', 'cherry']
// 값을 교체 함
console.log(fruits.splice(1, 2, 'melon', 'orange'))  // ["banana", "cherry"]
console.log(fruits);                                 // ["apple", "melon", "orange"]