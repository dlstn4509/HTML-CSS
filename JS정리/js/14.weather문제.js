// 3c04f92240b9cdfbc2e0280668623b5d
// https://api.openweathermap.org/data/2.5/weather?q=seoul&appid=3c04f92240b9cdfbc2e0280668623b5d&units=metric

// 문제 1. ../json/city.list.json의 모든 데이터를 cityList(Array)에 담으시오.
// $.get, axios, XMLHttpRequest 셋 중 하나를 선택

// 문제2. 가져온 데이터에서 한국의 정보만을 korCity(Array)에 담으시오.

// 문제3. korCity에서 { 도시이름 name, 위도 lat, 경도 lon, id } 객체를 city(Array)에 담으시오.

// cityList, korCity, city

// 내가한거
/* 
$.get('../../JSON/city.list.json').then(onResult);
function onResult(v){
  console.log(v[0].country);
  let korCity = [];
  for(var i=0; i < v.length; i++) {
    if(v[i].country === 'KR') {
      console.log(v[i])
    }
  }
}
*/

// 선생님이 한거
/* 
function onGet(r) {
	const cityList = r.data;
	const korCity = cityList.filter(v => v.country === 'KR');
	const city = korCity.map(v => ({ id: v.id, name: v.name, lat: v.coord.lat, lon: v.coord.lon }));
	const seoul = city.filter(v => v.name === 'Seoul');
	let [, { id, name, lat, lon }] = seoul;
	console.log(korCity, city);
	console.log(id, name, lat, lon);
}

function onError(err) {
	console.log(err);
} 
*/