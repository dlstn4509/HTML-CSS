/*
$('.bt-on').on('click', function(){
  console.log ('on');
})
*/

/*
for (var i=0; i<document.getElementsByClassName('bt-on').length;i++)
document.getElementsByClassName('bt-on')[i].addEventListener('click', function() {
  console.log ('on');
})
*/

/* 
ES5 / ES6 / jQuery 선택자
document.getElementById('idName') -> html
document.getElementsByClassName('className') -> Array[html, html]
document.getElementsByTagname('tagName') -> Array[html, html]

document.querySelector('.className') -> html (맨처음 만나는 엘러먼트)
document.querySelectorAll('.className') -> Array[html, html]
*/

/*
$('className') -> jQuery
*/


/*
document.getElementById('a').getElementsByTagName('ul')[0].getElementsByTagName('li')[0].innerHTML                                          // js

$('#a li:nth-child(1)').html()                      // jQuery

document.querySelectorAll('#a li')[0].innerHTML     // js 
*/


/*
js와 jQuery 이벤트 등록
document.querySelector('.bt-on').addEventListener('click', function(){}); -> js
$('bt-on').on('click', function(){});                                     -> jQuery

document.querySelector('.bt-off').addEventListener('click', function(){
  this는 이벤트 대상을 가르킨다 (순수JS, Dom Elment)
  $(this).hide();
  this.style.display = 'none';
});

$('.bt-on').on('click', function(){
  this는 이벤트 대상을 가르킨다 (순수JS, Dom Elment)
  this.style.display = 'none';
  $(this).hide();
});

*/

$('.bt-on').on('click', function(){
  // $('.img-wrap > img')[0].src = '../img/on.png';
  $('.img-wrap > img').attr('src', '../img/on.png');
  $('.bt-on').hide();
  $('.bt-off').show();
})

$('.bt-off').on('click', function(){
  // $('.img-wrap > img')[0].src = '../img/off.png';
  $('.img-wrap > img').attr('src', '../img/off.png');
  $('.bt-on').show();
  $('.bt-off').hide();
})