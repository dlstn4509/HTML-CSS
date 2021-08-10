/*************** global init ********************/
var $wrapper = $('.wrapper1');
var $slidewrap = $wrapper.find('.slide-wrap');
var $pager = $wrapper.find('.pager');
var $btPrev = $wrapper.find('.bt-prev')
var $btNext = $wrapper.find('.bt-next')
var interval;                  // setInterval을 넣어놓을 변수
var idx = 0;                   // animation이 움질일 값의 인자 (0, -100%, -200% ...)
var gap = 2000;                // setInterval의 간격
var speed = 500;               // animation speed
var last = $slidewrap.find('.slide').length -1;    // $('.slide)의 마지막 index 6

/*************** user function ******************/
function ani() {
  $slidewrap.stop().animate({'top' : -idx * 100 + '%'}, speed);
  $pager.removeClass('active');
  $pager.eq(idx === last ? 0 : idx).addClass('active');
}

/*************** event callback *****************/
function onEnter() {
  clearInterval(interval);
}

function onLeave() {
  interval = setInterval(onNext, gap);
}

function onPager() {
  idx = $(this).index();
  ani();
}

function onPrev() {
  if(idx === 0) {
    $slidewrap.css('top', -last * 100 + '%');
    idx = last;
  }
  idx--;
  ani();
}

function onNext() {
  if(idx === last) {
    $slidewrap.css('top', 0);
    idx = 0;
  }
  idx++;
  ani();
}

/*************** event init *********************/
$wrapper.mouseenter(onEnter);
$wrapper.mouseleave(onLeave);
$pager.click(onPager);
$btPrev.click(onPrev);
$btNext.click(onNext);

/*************** start init *********************/
interval = setInterval(onNext, gap);

