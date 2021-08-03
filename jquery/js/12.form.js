/*************** Global init ****************/
let scores = [
	{ id: 1, name: '홍길동', kor: 95, eng: 80, math: 75 },
	{ id: 2, name: '홍길순', kor: 88, eng: 95, math: 85 },
	{ id: 3, name: '홍길만', kor: 90, eng: 85, math: 85 },
]

/*************** Function init ****************/
function init() {
	// for(var i=0; i<scores.length; i++) {createRow(scores[i])}
	for(let i in scores) {createRow(scores[i]);}
	// for(var v of scores) {createRow(v)}  //  IE11 미지원
  // scores.forEach(function(v, i){createRow(v)})
}

function average() {
	for(var i=0, sum=0; i<arguments.length; i++) {
		sum += Number(arguments[i]);
	}
	return (sum/arguments.length).toFixed(2);
}

function total() { // 가변인자
	for(var i=0, sum=0; i<arguments.length; i++) {
		sum += Number(arguments[i]);
	}
	return sum;
}


function createRow(data) {
  let id = $('.score-tbody tr').length + 1;
	let name = data.name;
	let kor = data.kor;
	let eng = data.eng;
	let math = data.math;
	let tot = total(kor, eng, math);
	let avg = average(kor, eng, math);	
  let html = '<tr>';
  html += '<td>'+id+'</td>';
  html += '<td>'+name+'</td>';
  html += '<td>'+kor+'</td>';
  html += '<td>'+eng+'</td>';
  html += '<td>'+math+'</td>';
  html += '<td>'+tot+'</td>';
  html += '<td>'+avg+'</td>';
  html += '</tr>';
  $(html).appendTo('.score-tbody');
}


/*************** Event callback ****************/
function onShowForm() {
	$('.score-form').stop().slideDown(300, function(){
    document.scoreForm.name.focus();
  });
}

function onSubmit () { // 검증
  let f = document.scoreForm;
  let name = f.name.value.trim();
  let kor = f.kor.value;
  let eng = f.eng.value;
  let math = f.math.value;
  if(name.length < 2) {
    alert('이름을 입력하세요.')
    f.name.focus();
    return false;
  }
  // if(kor >= 0 && kor <= 100 )
  if(kor < 0 || kor > 100 ) {
    alert('점수가 올바르지 않습니다.')
    f.kor.focus()
    return false;
  }
  if(eng < 0 || eng > 100 ) {
    alert('점수가 올바르지 않습니다.')
    f.eng.focus()
    return false;
  }
  if(math < 0 || math > 100 ) {
    alert('점수가 올바르지 않습니다.')
    f.math.focus()
    return false;
  }
  scores.push({
    id: scores.length.length+1,
    name:name,
    kor:kor,
    eng:eng,
    math:math
  });
  createRow(scores[scores.length-1]); // 마지막 요소의 값
  f.reset();
  f.name.focus();
  return false;
}


/*************** Event init ****************/
$('.bt-show').click(onShowForm);

init();

