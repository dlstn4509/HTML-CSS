// hide() 괄호 안에 시간을 안주면 바로 없어짐 ("display: none;")
// hide() 괄호 안에 시간을 주면 시간동안 width, height, opacity가 줄어들면서 width, height, opacity가 0이 되면서 사라짐 ("display: none;")  
// "slow"(600), "normar"(400), "fast"(200), ms (시간 표기법)

$('.bt1').on('click', function() {
  $('.box').stop().hide(1000);
})

$('.bt2').on('click', function() {
  $('.box').stop().show(1000);
})

$('.bt3').on('click', function() {
  $('.box').stop().fadeOut('fast'); 
})

$('.bt4').on('click', function() {
  $('.box').stop().fadeIn('slow');
})

$('.bt5').on('click', function() {
  $('.box').stop().slideUp(1000);
})

$('.bt6').on('click', function() {
  $('.box').stop().slideDown(1000);
})



$('.navi').on('mouseenter', function () {
  // $(this).childern('.sub-wp').stop().slideDown(100); // 자식선택자
  $(this).find('.sub-wp').stop().slideDown(100);        // 자손선택자
})