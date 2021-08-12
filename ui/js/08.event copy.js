
function onScroll(v, i) {
  var guideTop = $(this).scrollTop() + $(this).outerHeight();
  $('h1.title').each(function() {
    if($(this).offset().top < guideTop) $(this).addClass('active')
  })
  $('.box').each(function() {
    if($(this).offset().top < guideTop) $(this).addClass('active')
  })
}

function onWheel(e) {
  
}

function onResize(e) {

}

$(window).scroll(onScroll).trigger('scroll');




