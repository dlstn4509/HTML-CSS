/*************** Global init ****************/
let scores = [
	{ id: 1, name: '홍길동', kor: 95, eng: 80, math: 75 },
	{ id: 2, name: '홍길순', kor: 88, eng: 95, math: 85 },
	{ id: 3, name: '홍길만', kor: 90, eng: 85, math: 85 },
]

/*************** Function init ****************/
function init() {
  for (var i=0; i<scores.length; i++) {
    createRow(scores[i])
  }
}

function average () {

}

function totla () {

}

function createRow () {
  
}


/*************** Event callback ****************/
function onShowForm() {
  $('.score-form').stop().slideDown();
}

/*************** Event init ****************/
$('.bt-show').click(onShowForm);

init();