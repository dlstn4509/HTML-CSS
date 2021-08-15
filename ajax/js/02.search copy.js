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

function setWebLists() {
  
}

function setBlogLists() {

}

function setVclipLists() {

}

function setBookLists() {

}

function setCafeLists() {

}

/*************** event callback *****************/
function onSubmit(e) {
  e.preventDefault();
  var cate = $(this).find('select[name="category"]').val().trim();
  var query = $(this).find('input[name="query"]').val().trim();
  axios.get(getPath(cate), getParams(query)).then(onSuccess).catch(onError);
}


function onSuccess(res) {
  var cnt = res.data.meta.total_count;
  $('.result-cnt').html(numberFormat(cnt));
  switch((res.config.url).split('/').pop()) {
  case 'web':
    setWebLists();
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