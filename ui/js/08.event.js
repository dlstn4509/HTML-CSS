/**
 * scroll. wheel, resize
 * 
 * */

/*************** global init ********************/


/*************** user function ******************/


/*************** event callback *****************/
function onScroll(e) {
  // console.log(e);
  // console.log(window.scrollY);        // JS
  // console.log($(this).scrollTop);     // jQuery
  // $().offset()
/*   console.log($('h1.title').eq(0).offset().top);
  console.log($('h1.title').eq(1).offset().top);
  console.log($('h1.title').eq(2).offset().top);
  console.log($('h1.title').eq(3).offset().top);
  console.log($('h1.title').eq(4).offset().top); */
  var guideTop = $(window).scrollTop() + $(this).innerWidth();
  $('h1.title').each(function(v, i){
    if(guideTop - 1000 > $(this).offset().top) $(this).addClass('active');
  });
  $('.box').each(function(v, i){
    if(guideTop - 1000 > $(this).offset().top) $(this).addClass('active');
  });
}

function onWheel(e) {
  console.log(e);
  console.log(e.deltaY);   // ie, chrome, ff -> +(내리고) -(올리고), opera(부호 반대)  -> JS
  console.log(e.originalEvent.deltaY)    //jQuery
}

function onResize(e) {
  // console.log(e);
  // console.log(window.innerWidth);
  console.log($(this).width());
  console.log($(this).innerWidth());
  console.log($(this).outerWidth());
  console.log($(this).outerWidth(true));
}

/*************** event init *********************/
// window.addEventListener('scroll', onScroll);
$(window).scroll(onScroll).trigger('scroll');

// window.addEventListener('wheel', onWheel);
// $(window).on('wheel', onWheel);

// window.addEventListener('resize', onResize);
// $(window).resize(onResize);

/*************** start init *********************/

