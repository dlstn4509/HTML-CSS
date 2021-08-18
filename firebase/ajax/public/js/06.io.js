/*
function myFn(fn, option) {
	var root = option.root = 'hi';
	var opt = option.rootMargin+"%";
	fn(this, root, opt);
}

myFn(onFn, option);
function onFn(el, rootValue, option) {
	console.log(el, rootValue, option);
}
*/

var observer;
var option = {
  // root: null,
  rootMargin: '0px',     // 미리 동작을 시킬려면 수치를 주면 됨, 기본값은 0
  threshold: [0, .25, .5, .75, 1]    //  화면에 얼만큼 나와야 동작하는지, 기본값 0 전체 1 반 .5
}

observer = new IntersectionObserver(onIntersection, option);
observer.observe(document.querySelector('.wrapper'));

function onIntersection(el, observer) {
  el.forEach(function(v, i) {
    if(v.isIntersecting){
      if(v.intersectionRatio < .25) {
        $(v.target).css('background-color', 'red')
      }
      else if(v.intersectionRatio >=.25 && v.intersectionRatio < .5){
        $(v.target).css('background-color', 'green')
      }
      else if(v.intersectionRatio >=.5 && v.intersectionRatio < .75){
        $(v.target).css('background-color', 'blue')
      }
      else if(v.intersectionRatio >=.75){
        $(v.target).css('background-color', 'purple')
      }
    }
    else {
      $(v.target).css('background-color', 'beige')
      // observer.unobserve(v.target;             // 정지
    }
    console.log(v.isIntersecting);                // 화면에 보이느냐 안보이느냐 true, false
    console.log(v.intersectionRatio);             // 얼만큼 보이느냐
  })
}