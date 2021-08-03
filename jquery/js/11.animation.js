/*
"abcd".replace("ab", "xy");					// "xycd"
"15px".replace("px", "");						// "15"
Number("15px".replace("px", ""));		// 15

easing 움직임
갈놈 += (목표값 - 갈놈) * 0.5;
갈놈 = 갈놈 + (목표값 - 갈놈) * 0.5;
*/

/**************************** 전역설정 **************************/
let interval;

/**************************** 함수선언 **************************/


/**************************** 이벤트콜백 **************************/
function onFadeIn(_el) {
  let el = document.querySelector(_el);
  let opacity = getComputedStyle(el).getPropertyValue('opacity');
  console.log('hi')
  el.style.opacity = Number(opacity) + 0.01;
  if(el.style.opacity >= 0.99) {
    el.style.opacity = 1;
    clearInterval(interval);
  }
};

function onFadeOut(_el) {
  let el = document.querySelector(_el);
  let opacity = getComputedStyle(el).getPropertyValue('opacity');
  console.log('hi')
  el.style.opacity = opacity - 0.01;
  if(el.style.opacity <= 0.01) {
    el.style.opacity = 0;
    clearInterval(interval);
  }
};

function onMoving(_el) {
  let el = document.querySelector(_el);
  let left = Number(getComputedStyle(el).getPropertyValue('left').replace("px", ''));
  let target = el.parentNode.clientWidth - el.clientWidth;
  left += (target - left) * 0.25
  el.style.left = left + 'px';
  if(left <= target - 1){
    el.style.left = target + 'px';
    clearInterval(interval);
  }

  /* el.style.left = left + 2 + 'px';
  if(left + 1 >= target) {
    el.style.left = target + 'px';
    clearInterval(interval);
  } */
}

function onShow () {
  clearInterval(interval);
  interval = setInterval(onFadeIn, 10, '.box');
};

function onHide () {
  clearInterval(interval);
  interval = setInterval(onFadeOut, 10, '.box');
};

function onMove () {
  clearInterval(interval);
  interval = setInterval(onMoving, 5, '.box2');
};

/**************************** 이벤트등록 **************************/
document.querySelector('.bt-show').addEventListener('click', onShow);
document.querySelector('.bt-hide').addEventListener('click', onHide);
document.querySelector('.bt-move').addEventListener('click', onMove);

