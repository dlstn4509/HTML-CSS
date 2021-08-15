/*************** global init ********************/
var auth = 'KakaoAK accdfd5267af756d07efcd007e13bcee';

/*************** user function ******************/
function getPath(cate) {
  return 'https://dapi.kakao.com/'+(cate === 'book' ? 'v3' : 'v2')+'/search/' + cate;
  // https://dapi.kakao.com/v2/search/web
};

function getParams(query) {
  return {
    params: {query: query},
    headers: {Authorization: auth}
  };
};

function setTotalCnt(cnt) {     // 검색결과 건수
  $('.result-cnt').html(numberFormat(cnt))
}

function setWebLists(r) {
  $('.lists').empty().attr('class', 'lists web');
  r.forEach(function(v, i) {
    var html  = '<li class="list web">';
    html += '<h3 class="title">'+v.title+'</h3>';
    html += '<p class="content">'+v.contents+'</p>';
    html += '<a class="link" href="'+v.url+'" target="_black">'+v.url+'</a>';
    html += '<div class="dt">'+moment(v.datetime).format('YYYY-MM-DD HH:mm:ss')+'</div>';
    html += '</li>';
    $('.lists').append(html);
  })
}

function setImageLists(r) {
  $('.lists').empty().attr('class', 'lists image grid-wrap');
  $('.lists').append('<li class="list image grid-sizer"></li>');
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
    var html = '<li class="list image grid-item" data-info=\''+info+'\'>';
    html += '<img src="'+v.thumbnail_url+'" class="w100">';
    html += '<div class="info"></div>';
    html += '</li>';
    $(html).appendTo('.lists').click(onModalShow);
  });
  var $grid = $('.grid-wrap').masonry({
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true
  });
  $grid.imagesLoaded().progress( function() {
    $grid.masonry('layout');
    $grid.masonry('reloadItems');
  });
}

function setClipLists(r) {
  
}

function setBlogLists(r) {
  
}

function setBookLists(r) {
  
}

function setCafeLists(r) {
  
}


/*************** event callback *****************/
function onSubmit(e) {
  e.preventDefault();
  var cate = $(this).find('select[name="category"]').val().trim();
  var query = $(this).find('input[name="query"]').val().trim();
  axios.get(getPath(cate), getParams(query)).then(onSuccess).catch(onError);
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
  var cate = (res.config.url).split('/').pop();
  var cnt = res.data.meta.total_count;
  $('.result-cnt').html(numberFormat(cnt));
  switch(cate) {
    case 'web':
      setWebLists(v.documents);
      break;
    case 'blog':
      setBlogLists();
      break;
    case 'vclip':
      setVclipLists();
      break;
    case 'book':
      setBookLists();
      break;
    case 'cafe':
      setCafeLists();
      break;
    }
}

function onError(err) {
  
}

/*************** event init *********************/
$('.search-form').submit(onSubmit);

/*************** start init *********************/

