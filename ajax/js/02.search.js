/*************** global init ********************/
var auth = 'KakaoAK accdfd5267af756d07efcd007e13bcee';

/*************** user function ******************/
function getPath(cate) {
  return 'https://dapi.kakao.com/'+(cate === 'book' ? 'v3' : 'v2')+'/search/' + cate;
}

function getParams(query) {
  return {
    params: {query: query},
    headers: {Authorization: auth}
  }
}

function setTotalCnt(cnt) {
  $('.result-cnt').html(numberFormat(cnt))
}

function setWebLists(r) {
  
}

function setImageLists(r) {
  
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

function onSuccess(res) {
  var cate = res.config.url.split('/').pop();
  var v = res.data;
  setTotalCnt(v.meta.total_count);
  switch(cate) {
    case 'web' :
      setWebLists(v.document);
      break;
    case 'image' :
      setImageLists(v.document);
      break;
    case 'vclip' :
      setClipLists(v.document);
      break;
    case 'blog' :
      setBlogLists(v.document);
      break;
    case 'book' :
      setBookLists(v.document);
      break;
    case 'cafe' :
      setCafeLists(v.document);
      break;
  }
}

function onError(err) {
  console.log(err);
}

/*************** event init *********************/
$('.search-form').submit(onSubmit);

/*************** start init *********************/

