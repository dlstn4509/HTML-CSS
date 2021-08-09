/* 
console.log( document.initForm.cnt.value ); //js
console.log( document.querySelector('form[name="initForm"] input[name="cnt"]').value ); //js
console.log( $('form[name="initForm"] input[name="cnt"]').val() ); //jquery
console.log( $('#cnt').val() ); //jquery
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

function addMember(selector, n) {
  // function addMember(n) {
  for (var i=0, html; i<n; i++) {
    html  = '<div class="member-wp">';
    html += '<div class="imgs">';
    html += '<img src="../img/marathon.png" class="w100">';
    html += '</div>';
    html += '<input type="text" name="member" class="form-control">';
    html += '</div>';
    $(selector).append(html);
    // $('.stage-wrap').append(html);
  }
}

function removeEl(selector, empty) {
  if(empty) {
    $(selector).empty();
  }
  else {
    $(selector).remove();
  }
}

function getTarget() {
  return ($('.stage-wrap').outerWidth() - $('.member-wp').outerWidth() - 10) + 'px';
}

/*************** event callback *****************/
function onInit() {
  $('.bt-init').hide();
  $('.bt-start').show();
  $('.bt-reset').show();
  $('#cnt').attr('readonly', true);
  addMember('.stage-wrap', $('#cnt').val());
}

function onStart() {
  $('.bt-start').attr('disabled', true);
  $('.bt-reset').attr('disabled', true);
  // $('.member-wp').stop().animate({'left' : getTarget()}, 2000)
  $('.member-wp').each(function(i){
    var speed = random(1500, 500)
    console.log(i, speed);
    $(this).stop().animate({'left' : getTarget()}, speed);
  })
}

function onReset() {
  $('.bt-init').show();
  $('.bt-start').hide();
  $('.bt-reset').hide();
  $('#cnt').val(4).focus().attr('readonly', false);
  // removeEl('.stage-wrap', true);
  removeEl('.member-wp');
}

/*************** event init *********************/
$('.bt-init').click(onInit);
$('.bt-start').click(onStart);
$('.bt-reset').click(onReset);

/*************** start init *********************/

