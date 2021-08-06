
/* document.querySelector('.bt-hide').addEventListener("click", function(){
  $(document.querySelector('.box')).fadeOut(1000);
})
 */

$('.bt-hide').click(function(){
  $('.box').fadeOut();
})

$('.bt-show').click(function(){
  $('.box').fadeIn();
})