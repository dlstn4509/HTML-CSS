/*************** global init ********************/
var auth = 'KakaoAK accdfd5267af756d07efcd007e13bcee';
var kakaoURL = 'https://dapi.kakao.com/';
var cate, query, isEnd = false, page = 1;
var size = {web: 10, blog: 10, cafe: 10, vclip: 15, image: 80} // size 기본값
var observer;

/*************** user function ******************/
function getPath(cate) {        // 카카오 api 주소
  return kakaoURL+(cate === 'book' ? 'v3' : 'v2')+'/search/' + cate;
}       // https://dapi.kakao.com/v2/search/web

function getParams(query) {     // 카카오 검색방법
  return {
    params: {query: query, size: size[cate], page: page},
    headers: {Authorization: auth}
  }
}

function setTotalCnt(cnt) {     // 검색결과 건수
  $('.result-cnt').html(numberFormat(cnt))
}

function setWebLists(r) {       // web
	$('.lists').empty().attr({'class': 'lists web', 'style' : ''});
	r.forEach(function(v, i) {
		var html = '<li class="list web">';
		html += '<a class="title" href="'+v.url+'" target="_blank">'+v.title+'</a>';
		html += '<p class="content">'+v.contents+'</p>';
		html += '<a class="link" href="'+v.url+'" target="_blank">'+v.url+'</a>';
		html += '<div class="dt">'+moment(v.datetime).format('YYYY-MM-DD HH:mm:ss')+'</div>';
		html += '</li>';
		$('.lists').append(html);
	});
}

function setImageLists(r) {     // 이미지
  if(page === 1) $('.lists').empty().attr({'class': 'lists image', 'style': ''});
  else $('.observer').remove();

  r.forEach(function(v, i) {
    var info = JSON.stringify({
      collection: v.collection,
      width: v.width,
      height: v.height,
      src: v.image_url,
      thumb: v.thumbnail_url,
      name: v.display_sitename,
      url: v.doc_url,
      dt: v.datetime
    });
    var html = '<li class="list image" data-info=\''+info+'\'>';
    html += '<img src="'+v.thumbnail_url+'" class="w100">';
    html += '<div class="info"></div>';
    html += '</li>';
    $(html).appendTo('.lists').click(onModalShow);
  });

  /// 옵저버 처리
  $('.lists').after('<div class="observer d-flex justify-content-center py-5"><i class="fa fa-spin fa-spinner fa-2x"></i></div>');
	observer = new IntersectionObserver(onIntersection, {threshold: 1});
	observer.observe(document.querySelector('.observer'));
}

function setBlogLists(r) {      // 블로그
	$('.lists').empty().attr({'class': 'lists blog', 'style' : ''});
	r.forEach(function(v, i) {
  var html  = '<li class="list">';
  html += '<a class="thumbs" href="'+v.url+'" target="_black">';
  html += '<img src="'+v.thumbnail+'" alt="'+v.title+'" class="w100">';
  html += '</a>';
  html += '<div class="contents">';
  html += '<a class="title" href="'+v.url+'" target="_black">'+v.title+'</a>';
  html += '<p class="content">'+v.contents+'</p>';
  html += '<a class="name" href="'+v.url+'" target="_black">'+v.blogname+'</a> | <a href="'+v.url+'" class="link" target="_black">'+v.url+'</a>';
  html += '<div class="dt">'+moment(v.datetime).format('YYYY-MM-DD')+'</div>';
  html += '</div>';
  html += '</li>';
  $('.lists').append(html);
	});
}

function setClipLists(r) {      // 동영상
  $('.pager-wrap').hide();
  if(page === 1) $('.lists').empty().attr({'class': 'lists clip', 'style': ''});
  else $('.observer').remove();
	r.forEach(function(v, i) {
  var html  = '<li class="list">';
  html += '<a class="thumbs" href="'+v.url+'" target="_black">';
  html += '<img src="'+v.thumbnail+'" alt="'+v.title+'" class="w100">';
  html += '</a>';
  html += '<div class="contents">';
  html += '<a class="title" href="'+v.url+'" target="_black">'+v.title+'</a>';
  html += '<div>'
  html += '<a class="author" href="'+v.url+'" target="_black">'+v.author+'</a>';
  html += '<span class="play-time">'+getPlayTime(v.play_time)+'</span>';
  html += '</div>'
  html += '<a href="'+v.url+'" class="link" target="_black">'+v.url+'</a>';
  html += '<div class="dt">'+moment(v.datetime).format('YYYY-MM-DD')+'</div>';
  html += '</div>';
  html += '</li>';
  $('.lists').append(html);
	});

  /// 옵저버 처리
  $('.lists').after('<div class="observer d-flex justify-content-center py-5"><i class="fa fa-spin fa-spinner fa-2x"></i></div>');
	observer = new IntersectionObserver(onIntersection, {threshold: 1});
	observer.observe(document.querySelector('.observer'));
}

function setBookLists(r) {       // 도서
  $('.lists').empty().attr({'class':'lists book', 'style' : ''});
	r.forEach(function(v, i) {
    var author = v.authors.join(', ');
    var thumbnail = v.thumbnail !== '' ? v.thumbnail : 'http://via.placeholder.com/120x174/eee?text=No+image';
    var translator = v.translators.join(', ');
    var salePrice = (v.sale_price) > -1 ? numberFormat(v.sale_price) + '원' : '판매중지'
    var isbn = v.isbn.replace(' ', ' / ');
    var dt = moment(v.datetime).format('YYYY-MM-DD');
    var html  = '<li class="list">';
    html += '<a href="'+v.url+'" target="_blank" class="title">'+v.title+'</a>';
    html += '<div class="info-wrap">';
    html += '<a class="thumb-wp" href="'+v.url+'" target="_blank">';
    html += '<img src="'+thumbnail+'" alt=""   class="w100">';
    html += '</a>';
    html += '<div class="info-wp">';
    html += '<div class="authors">';
    html += '<span class="author">'+author+'</span>';
    if (v.translators.length) html += '<span class="translators"> (역: '+translator+')</span>';
    html += '</div>';
    html += '<div class="prices">';
    html += '<span class="price">'+numberFormat(v.price)+'</span> | ';
    html += '<span class="sale-price">'+salePrice+'</span>';
    if (v.status) html += '<span class="status">'+' ' + (v.status)+'</span>';
    html += '</div>';
    html += '<div class="publisher">'+v.publisher+'</div>';
    html += '<div class="isbn">'+isbn+'</div>';
    html += '<div class="dt">'+dt+'</div>';
    html += '</div>';
    html += '</div>';
    html += '<a href="'+v.url+'" target="_blank" class="content">'+v.contents+'</a>';
    html += '</li>';
    $('.lists').append(html);
	});
}

function setCafeLists(r) {       // 카페
  $('.lists').empty().attr({'class': 'lists cafe', 'style' : ''});
	r.forEach(function(v, i) {
  var html  = '<li class="list">';
  html += '<a class="thumbs" href="'+v.url+'" target="_black">';
  html += '<img src="'+v.thumbnail+'" alt="'+v.title+'" class="w100">';
  html += '</a>';
  html += '<div class="contents">';
  html += '<a class="title" href="'+v.url+'" target="_black">'+v.title+'</a>';
  html += '<p class="content">'+v.contents+'</p>';
  html += '<a class="name" href="'+v.url+'" target="_black">'+v.cafename+'</a> | <a href="'+v.url+'" class="link" target="_black">'+v.url+'</a>';
  html += '<div class="dt">'+moment(v.datetime).format('YYYY-MM-DD')+'</div>';
  html += '</div>';
  html += '</li>';
  $('.lists').append(html);
	});
}

function setPager(totalRecord) {
  $('.pager-wrap').show();
  $('.observer').remove();

  page = Number(page);
  var totalPage = Math.ceil(totalRecord/size[cate]); // 총 페이지 수
	if(totalPage > 50) totalPage = 50;
	if(cate === 'vclip' && totalPage > 15) totalPage = 15;
  if(page > totalPage) page = totalPage;
  var pagerCnt = 5;     //  pager의 보여질 페이지 수
  var startPage;        //  pager의 시작번호
  var endPage;          //  pager의 마지막번호
  startPage = Math.floor((page -1) / pagerCnt) * pagerCnt + 1;
  endPage = startPage + pagerCnt -1;
  if(endPage > totalPage) endPage = totalPage;

  $('.pager-wrap .bt-page').remove();
  for(var i=startPage; i<=endPage; i++){
    if(i === page)
    $('<button class="bt-page active" data-page="'+i+'">'+i+'</button>').insertBefore('.pager-wrap .bt-next').click(onPagerClick);
    // $('.pager-wrap .bt-next').before('<i class="bt-page active" data-page="'+i+'">'+i+'</i>')
    else
    $('<button class="bt-page" data-page="'+i+'">'+i+'</button>').insertBefore('.pager-wrap .bt-next').click(onPagerClick);
  }
  if(page === 1)
    $('.pager-wrap .bt-first').attr('disabled', true);
  else
    $('.pager-wrap .bt-first').attr('disabled', false);

  if(startPage === 1)
    $('.pager-wrap .bt-pager-prev').attr('disabled', true);
  else
    $('.pager-wrap .bt-pager-prev').attr('disabled', false)[0].dataset['page'] = startPage -1;

  if(page === 1)
    $('.pager-wrap .bt-prev').attr('disabled', true);
  else
    $('.pager-wrap .bt-prev').attr('disabled', false)[0].dataset['page'] = page - 1;
  
  if(page === totalPage)
    $('.pager-wrap .bt-next').attr('disabled', true);
  else
    $('.pager-wrap .bt-next').attr('disabled', false)[0].dataset['page'] = page + 1;

  if(endPage === totalPage)
    $('.pager-wrap .bt-pager-next').attr('disabled', true);
  else
    $('.pager-wrap .bt-pager-next').attr('disabled', false)[0].dataset['page'] = endPage + 1;

  if(page === totalPage)
    $('.pager-wrap .bt-last').attr('disabled', true);
  else
    $('.pager-wrap .bt-last').attr('disabled', false)[0].dataset['page'] = totalPage;
}

function setIntersection() {
	
}

/*************** event callback *****************/
function onIntersection(el) {
		if(el[el.length -1].isIntersecting && isEnd === false) {
      page = Number(page) + 1;
      axios.get(getPath(cate), getParams(query)).then(onSuccess).catch(onError);
    }
    if(isEnd == true) {
      // observer.unobserve
    }
};

function onPagerClick() {
  page = Number(this.dataset.page);
  axios.get(getPath(cate), getParams(query)).then(onSuccess).catch(onError);
}


function onSubmit(e) {
	e.preventDefault();  // 이게 없으면 나한테 보냄 -> 카카오로 ㄱㄱ
	cate = $(this).find('select[name="category"]').val().trim();
	query = $(this).find('input[name="query"]').val().trim();
  page = 1;
  if(cate && cate !== '' && query && query !== '')
  axios.get(getPath(cate), getParams(query)).then(onSuccess).catch(onError);
  else
  $(this).find('input[name="query"]').focus();
}

function onModalShow() {
  var v = $(this).data('info');
  $('.modal-wrapper').show();
  $('.modal-wrapper .img-wp img').attr('src', v.src);
  $('.modal-wrapper .img-wp img').data('thumb', v.thumb);
  $('.modal-wrapper .size-wp').html(v.width + ' x ' + v.height);
  $('.modal-wrapper .collection').html('['+v.collection+'] ');
  $('.modal-wrapper .name').html(v.name);
  $('.modal-wrapper .link').attr('href', v.url).html(v.url);
  $('.modal-wrapper .dt').html(moment(v.datetime).format('YYYY-MM-DD HH:mm:ss'));
}

function onLoadError(el) {
  $('.modal-wrapper .img-wp img').attr('src', $(el).data('thumb'));
}

function onSuccess(res) {
	console.log(res);
	var cateStr = res.config.url.split('/').pop();
	var v = res.data;
	setTotalCnt(v.meta.pageable_count);
  isEnd = v.meta.is_end;
	if(cate !== 'vclip' && cate !== 'image') setPager(v.meta.pageable_count);
  switch(cateStr) {
    case 'web' :
      setWebLists(v.documents);
      break;
    case 'image' :
      setImageLists(v.documents);
      break;
    case 'blog' :
      setBlogLists(v.documents);
      break;
    case 'vclip' :
      setClipLists(v.documents);
      break;
    case 'book' :
      setBookLists(v.documents);
      break;
    case 'cafe' :
      setCafeLists(v.documents);
      break;
  }
}

function onError(err) {
  
}

/*************** event init *********************/
$('.search-form').submit(onSubmit);

$('.pager-wrap .bt-first').click(onPagerClick);
$('.pager-wrap .bt-pager-prev').click(onPagerClick);
$('.pager-wrap .bt-prev').click(onPagerClick);
$('.pager-wrap .bt-next').click(onPagerClick);
$('.pager-wrap .bt-pager-next').click(onPagerClick);
$('.pager-wrap .bt-last').click(onPagerClick);

/*************** start init *********************/

