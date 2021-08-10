/*************** global init ********************/
var $wrapper = $('.wrapper1');
var $slide = $wrapper.find('.slide-wrap');
var $pager = $wrapper.find('.pager');
var $btPrev = $wrapper.find('.bt-prev')
var $btNext = $wrapper.find('.bt-next')
var interval;
var idx = 0;
var gap = 2000;
var speed = 500;
var last = $slide.find('.slide').length -1;

/*************** user function ******************/
function ani(slideEl, pagerEl, speed, idx) {

}

/*************** event callback *****************/


/*************** event init *********************/
$wrapper.mouseenter(onEnter).mouseleave(onLeave);
$pager.click(onPager);
$btPrev.click(onPrev);
$btNext.click(onNext);

/*************** start init *********************/
interval = setInterval(onInterval, gap);