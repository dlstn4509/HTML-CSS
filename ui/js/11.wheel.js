/** 
 * <Event Bubbling> 
 * event.preventDefault();          // 이벤트 막기
 * event.stopPropagation();         // 클릭한애만 선택
 * window.addEventListener('wheel', onWheel, {passive: false});   // 휠막기
 */


/*************** global init ********************/
var isWheel = true;

/*************** user function ******************/


/*************** event callback *****************/
function onWheel(e) {  
  if(isWheel) {
    e.preventDefault();    //wheel 하면 못움직이기 막기
    isWheel = false;
    var d = e.deltaY;      // + 스크롤 내리기, - 스크롤 내리기    100
    var y = e.pageY;       // 스크롤 이벤트가 발생한 지점         y축 숫자
    var page = $('section.page'); // .page
    var last = page.length - 1;   // page의 마지막 idx
    var top = [];          // .page들의 offset().top 값 배열
    var idx;               // 가야될 페이지 idx

    page.each(function(i) {
      top[i] = $(this).offset().top
    });

    for(var i=last; i>-1; i--) {   // 어느 페이지에서 휠 했냐
      if(y > top[i]) break;
      }
     // Y축 >  .page.offset().top
      console.log(i);

    if(d > 0) {                    // 휠을 내리면
      if(i < last) idx = i + 1;    // 휠을 내리고 마지막 페이지가 아니라면
      else idx = last;
    }

    if(d < 0) {                    // 휠을 올리면
      if(i > 0) idx = i - 1;       // 휠을 내리고 첫 페이지가 아니라면
      else idx = 0;
    }

    $('html, body').stop().animate({'scrollTop' : top[idx]}, 500)
    setTimeout(function(){isWheel = true}, 100)     // toggle
  }
}

function onWrapperClick(e) {
  console.log('wrapper');
  console.log(e.pageY, e.pageX);
}

function onContentWrapClick(e) {
  e.stopPropagation();
  console.log('content-wrap');
}

function onBoxClick(e) {
  e.stopPropagation();
  console.log('box');
}


/*************** event init *********************/
window.addEventListener('wheel', onWheel, {passive: false}); //wheel 하면 못움직이기 막기
// $(window).on('wheel', onWheel);

$('.wrapper').click(onWrapperClick);
$('.wrapper .content-wrap').click(onContentWrapClick);
$('.wrapper .box').click(onBoxClick);

/*************** start init *********************/



/* 

function onWheel(e) {
  console.log(e);
  console.log(e.deltaY);   // ie, chrome, ff -> +(내리고) -(올리고), opera(부호 반대)  -> JS
  console.log(e.originalEvent.deltaY)    //jQuery
}


window.addEventListener('wheel', onWheel);
$(window).on('wheel', onWheel);

 */