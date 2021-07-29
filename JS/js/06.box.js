/* 
기능정의서
1. createbox()가 실행되면 #stage에 .box를 생성한다.
2. removebox()가 실행되면 #stage에 .box를 삭제한다.
*/


var i =1;
var sum = 0;
for(; i<=10; i++) {
  sum += i  // sum = sum + i
}




function createBox () {
  document.getElementById('stage').innerHTML += '<div class="box"></div>';
}
function removeBox () {
  document.getElementById('stage').innerHTML = '';
}

// var stage = document.getElementById('stage');
// function createBox () {
//   stage.innerHTML = stage.innerHTML + '<div class="box"></div>';
// }
// function removeBox () {
//   stage.innerHTML = '';
// }
