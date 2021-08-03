/********************* 전역변수 ***************************/
let interval;

/********************* 함수 ***************************/
/* 
setInterval(실행할 함수, ms Gap);         -> 중복실행 가능
var i =1;
setInterval(function(){
  console.log(i++);
},1000);
 */

/********************* 이벤트콜백 ***************************/
/* function createBox() {
  let r = random(0, 256); // Math.floor(Math.random() * 256);
  let g = random(0, 256);
  let b = random(0, 256);
  let style = 'background-color: rgb('+r+', '+g+', '+b+')';
  let html = '<div class="box" style="'+style+'"></div>';
  $(html).appendTo('.stage');
};
function onBtShow() {
  setInterval(createBox, 100);
}; */

function createBox(el) {
  let r = random(0, 256);
  let g = random(0, 256);
  let b = random(0, 256);
  let style = 'background-color: rgb('+r+', '+g+', '+b+')';
  let html = '<div class="box" style="'+style+'"></div>';
  $(html).appendTo(el);
};

function onBtShow() {
  clearInterval(interval);
  interval = setInterval(createBox, 100, '.stage');
};

function onBtHide () {
  clearInterval(interval);
  $('.stage').empty();
}




/********************* 이벤트등록 ***************************/
setTimeout(createBox, 1000, '.stage') // 한번만 실행
$('.bt-show').click(onBtShow);
$('.bt-hide').click(onBtHide);
