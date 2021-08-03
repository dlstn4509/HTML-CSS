// hide() 괄호 안에 시간을 안주면 바로 없어짐 ("display: none;")
// hide() 괄호 안에 시간을 주면 시간동안 width, height, opacity가 줄어들면서 width, height, opacity가 0이 되면서 사라짐 ("display: none;")  
// "slow"(600), "normar"(400), "fast"(200), ms (시간 표기법)

$('.bt1').click(function() {
  $('.box').stop().hide(1000, function() {
    // callback 함수
    alert('사라졌어요');
  });
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

$('.bt-ani').click(function() {
  $('.box').stop().fadeOut(1000, function(){
    $(this).stop().fadeIn(1000, function(){
      $(this).stop().slideUp(1000, function(){
        $(this).stop().slideDown(1000, function(){
          alert('애니메이션 종료');
        })
      })
    })
  });
})

$('.navi').on('mouseenter', function () {
  // $(this).childern('.sub-wp').stop().slideDown(100); // 자식선택자
  $(this).find('.sub-wp').stop().slideDown(100);        // 자손선택자
})

$('.navi').on('mouseleave', function () {
  $(this).find('.sub-wp').stop().slideUp(100);
})


$('.bt7').click(function() {
  $('.box3').stop().animate({"left":"1000px"}, 2000, 'swing')     
  $('.box2').stop().animate({"left":"1000px"}, 2000, 'linear', function(){
    alert('ani end');
  });     
  // (json형태의css, [ms시간, 문자열('swing', 'linear'), fn(){}]);
  // [] 안에는 생략 가능
});

$('.bt8').click(function(){
  $('.box4').stop().animate({
    "width":"500px",
    "height":"500px"
  })
});

$('.bt9').click(function(){
  $('.box5').addClass('active');
});