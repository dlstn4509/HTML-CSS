var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {       // 통신상태가 변하면 실행
  if(xhr.status === 200 && xhr.readyState === 4) {
    console.log(JSON.parse(xhr.responseText));
  }
}

xhr.open('GET', 'https://dapi.kakao.com/v2/search/web?query=블랙핑크');
xhr.setRequestHeader('Authorization', 'KakaoAK accdfd5267af756d07efcd007e13bcee');
xhr.send();