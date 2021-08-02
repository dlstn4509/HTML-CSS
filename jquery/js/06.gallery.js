var foods = [
  { name : 'Popcicle', src:'../img/f1.jpg'},
  { name : 'Salmon', src:'../img/f2.jpg'},
  { name : 'Sandwitch', src:'../img/f3.jpg'},
  { name : 'Steak', src:'../img/f4.jpg'},
  { name : 'Wine', src:'../img/f5.jpg'},
  { name : 'Cherry', src:'../img/f6.jpg'},
  { name : 'Croissant', src:'../img/f7.jpg'}
];

for (var i=0, html; i<foods.length; i++) {
  html = '<li class="list">';
  html += '<img src="'+foods[i].src+'" class="w100 thumb" alt="'+foods[i].name+'">';
  html += '</li>';
  $('.list-wrap').append(html);
}


/*
1차 버전
$('.list-wrap .thumb').click(function() {
	console.log( $(this).parent() ); // this의 부모
	console.log( $(this).parents() ); // this의 모든 조상(배열)
	$('.stage-wrap .big').attr('src', $(this).attr('src'));
	$('.stage-wrap .name').html($(this).attr('alt'));
	$('.list-wrap .list').removeClass('active');
	$(this).parent().addClass('active');
});
*/

// 2차버전
$('.list-wrap .thumb').click(function(){
  var html = '<div class="hover"><img src="'+$(this).attr('src')+'" class="w100"></div>';
  $(html).appendTo('.stage-wrap').stop().hide().fadeIn(1000, function() {
    $('.stage-wrap .big').attr('src', $(this).find('img').attr('src'));
    $(this).remove();
  });
  $('.stage-wrap .name').html($(this).attr('alt'));
  $('.list-wrap .list').removeClass('active');
  $(this).parent().addClass('active');
});
// $(this).parent(); -> this의 부모
// $(this).parents();  -> this의 모든 조상 (배열로 리턴)




