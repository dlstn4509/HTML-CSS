/******************* 순수 자바스크립트 통신 *******************/ // 바닐라 스크립트

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {       // 통신상태가 변하면 실행
  if(xhr.status === 200 && xhr.readyState === 4) {
    console.log(JSON.parse(xhr.responseText));
  }
}

xhr.open('GET', 'https://dapi.kakao.com/v2/search/web?query=블랙핑크');
xhr.setRequestHeader('Authorization', 'KakaoAK accdfd5267af756d07efcd007e13bcee');
xhr.send();


/*************************** jQuery.ajax ***************************/

$.ajax({
  url: 'https://dapi.kakao.com/v2/search/image',
  type: 'GET',
  dataType: 'json',
  data: {query: '블랙핑크'},
  beforeSend: onBefore,
  success: onSuccess,
  error: onError
});

function onBefore(xhr) {
  xhr.setRequestHeader('Authorization', 'KakaoAK accdfd5267af756d07efcd007e13bcee')
};

function onSuccess(v) {
  console.log(v);
};

function onError(xhr, status, error) {
  console.log(xhr, status, error);
};


/*************************** axios ***************************/

axios
.get('https://dapi.kakao.com/v2/search/vclip', {
  params: {query: '블랙핑크'},
  headers: {Authorization: 'KakaoAK accdfd5267af756d07efcd007e13bcee'}
})
.then(onResult)
.catch(onAxiosError);

function onResult(v){
  console.log(v.data);
}
function onAxiosError(err){
  console.log(err);
}
