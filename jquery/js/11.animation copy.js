
/* document.querySelector('.bt-hide').addEventListener("click", function(){
  $(document.querySelector('.box')).fadeOut(1000);
}) */


$('.bt-hide').click(function(){
  $('.box').fadeOut();
})

$('.bt-show').click(function(){
  $('.box').fadeIn();
})

$('.bt-move').click(function(){
  $('.box2').animate({"left":"1000px"}, 100);
  $('.box2').animate({"right":"1000px"}, 200);
})
