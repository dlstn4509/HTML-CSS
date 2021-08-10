/*************** global init ********************/
var $wrapper = $('.wrapper1');
var $slidewrap = $wrapper.find('.slide-wrap');
var $pager = $wrapper.find('.pager');
var $btPrev = $wrapper.find('.bt-prev')
var $btNext = $wrapper.find('.bt-next')
var interval, n = 0, gap = 2000, gap = 500, cnt = $slidewrap.find('.slide').length;

/*************** user function ******************/
function ani(slideEl, pagerEl, speed, idx) {
  $(pagerEl).removeClass('active');
  $(pagerEl).eq(idx === cnt - 1 ? 0 : idx).addClass('active');
  $(slideEl).animate({'left': -idx * 100 + '%'}, speed);
}

/*************** event callback *****************/
function onEnter() {
  clearInterval(interval);
}

function onLeave() {
  interval = setInterval(onInterval, gap);
}

function onInterval() {
  if(n === cnt -1) {
    $slidewrap.css('left', 0);
    n = 1;
  }
  else {
    n++;
  }
  ani($slidewrap, $pager, gap, n);
}

function onPagerClick() {
  n = $(this).index();
  ani($slidewrap, $pager, gap, n);
}

function onPrev() {
  if(n === 0) {
    $slidewrap.css('left', - (cnt - 1)*100 + '%')
  }
  n = (n === 0) ? cnt - 2 : n - 1;
  ani($slidewrap, $pager, gap, n);
}

function onNext() {
  if(n === cnt - 1) {
    $slidewrap.css('left', 0)
  }
  n = (n === cnt - 1) ? 1 : n + 1;
  ani($slidewrap, $pager, gap, n);
}

/*************** event init *********************/
interval = setInterval(onInterval, gap);
$wrapper.mouseenter(onEnter).mouseleave(onLeave);
$pager.click(onPagerClick);
$btPrev.click(onPrev);
$btNext.click(onNext);

/*************** start init *********************/

