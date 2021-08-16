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
		var html = '<li class="list web">';
		html += '<a class="title" href="'+v.url+'" target="_blank">'+v.title+'</a>';
		html += '<p class="content">'+v.contents+'</p>';
		html += '<a class="link" href="'+v.url+'" target="_blank">'+v.url+'</a>';
		html += '<div class="dt">'+moment(v.datetime).format('YYYY-MM-DD HH:mm:ss')+'</div>';
		html += '</li>';
		$('.lists').append(html);
	});
}

function setImageLists(r) {
  console.log(r);
  $('.lists').empty().attr('class', 'lists image');
  r.forEach(function(v, i) {
    var html = '<li class="list">';
    html += '<img src="'+v.thumbnail_url+'" class="w100">';
    html += '</li>';
    $('.lists').append(html);
  });
}

function setBlogLists(r) {
  console.log(r);
}

function setVclipLists(r) {
  console.log(r);
}

function setBookLists(r) {
  console.log(r);
}

function setCafeLists(r) {
  console.log(r);
}

/*************** event callback *****************/
function onSubmit(e) {
	e.preventDefault(); 
	var cate = $(this).find('select[name="category"]').val().trim();
	var query = $(this).find('input[name="query"]').val().trim();
	axios.get(getPath(cate), getParams(query)).then(onSuccess).catch(onError);
}


function onSuccess(res) {
  var cate = res.config.url.split('/').pop();
  var v = res.data;
  setTotalCnt(v.meta.total_count);
  switch(cate) {
    case 'web' :
      setWebLists(v.documents);
      break;
    case 'image' :
      setImageLists(v.documents);
      break;
    case 'vclip' :
      setClipLists(v.documents);
      break;
    case 'blog' :
      setBlogLists(v.documents);
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

/*************** start init *********************/