/********************* 전역변수 ***************************/
var interval;


/********************* 함수등록 ***************************/



/********************* 함수콜백 ***************************/
function createBox(){
  var r = random (0, 256);
  var g = random (0, 256);
  var b = random (0, 256);
  var html = '<div class="box" style="background-color: rgb('+r+','+g+','+b+')"></div>';
  $(html).appendTo('.stage');
};

function show () {
  clearInterval(interval);
  interval = setInterval(createBox, 100);
};

function hide () {
  clearInterval(interval);
  $('.stage').empty();
};

/********************* 이벤트등록 ***************************/
$('.bt-show').click(show)
$('.bt-hide').click(hide)