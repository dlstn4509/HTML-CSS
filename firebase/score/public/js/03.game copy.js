/* 
console.log( document.initForm.cnt.value ); //js
console.log( document.querySelector('form[name="initForm"] input[name="cnt"]').value ); //js
console.log( $('form[name="initForm"] input[name="cnt"]').val() ); //jquery
console.log( $('#cnt').val() ); //jquery
*/


/*
database 저장
  {
    uid : '',                 (사용자)
    ip  : '',                 (위치)
    datetime : 1693754929398, (저장된 시점, 타임스탬프)
    result: [
      { name : '홍길동', speed: 1513 },
      { name : '홍길순', speed: 1523 },
      { name : '홍길만', speed: 1578 },
      { name : '홍길룡', speed: 1629 },
    ]
  }
*/


/**
 *  기능정의
 * ! 1. 참여 인원을 선택할 수 있는 입력창이 화면에 보인다
 * ! 2. 참여 인원 입력 후 준비버튼을 누르면 준비버튼이 시작버튼으로 바뀐다.
 * ! 3. 준비버튼 옆에 취소버튼이 생기고 버튼 클릭시 앞단계로 돌아갈 수 있다
 * ! 4. 참여 인원 입력 후 준비버튼을 누르면 준비버튼이 시작버튼으로 바뀐다
 * ! 5. 생성된 참여인원 밑에 입력창이 생기고 이름을 입력할 수 있다.
 * ! 6. 시작버튼을 클릭하면 경주가 시작되고 랜덤하게 결과가 나온다 
 * ! 7. 마지막 주자가 결승선을 통과하면 모달창이 떠오르며 경주 결과를 알려준다.
 * ! 8. 경주결과 확인 후 닫기 버튼을 누르면 초기화 상태로 돌아간다.
 */



/*************** global init ********************/


/*************** user function ******************/
function addMember(n) {
  for (var i=0, html; i<n; i++){
  html  = '<div class="member-wp">';
  html += '<div class="imgs">';
  html += '<img src="../img/marathon.png" class="w100">';
  html += '</div>';
  html += '<input type="text" name="member" class="form-control">';
  html += '</div>';
  $('.stage-wrap').append(html);
  }
}

/*************** event callback *****************/
function onInit() {
  $('.bt-init').hide();
  $('.bt-start').show();
  $('.bt-reset').show();
  addMember($('#cnt').val());
}

function onStart() {
  $('.bt-start').attr('disabled', true)
  $('.bt-reset').attr('disabled', true)
  $('#cnt').attr('readonly', true);
}



function onReset() {
  $('.bt-init').show();
  $('.bt-start').hide();
  $('.bt-reset').hide();
  $('.stage-wrap').empty();
}


/*************** event init *********************/
$('.bt-init').click(onInit);
$('.bt-start').click(onStart);
$('.bt-reset').click(onReset);

/*************** start init *********************/

