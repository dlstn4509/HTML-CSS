/*
https://api.openweathermap.org/data/2.5/weather?q=seoul&appid=3c04f92240b9cdfbc2e0280668623b5d&units=metric
*/
/*
https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
*/

/*************** global init ********************/
const appid = '3c04f92240b9cdfbc2e0280668623b5d'
const url =  'https://api.openweathermap.org/data/2.5/weather'
const icons =  ['https://openweathermap.org/img/wn/', '@2x.png']
const param = {units: 'metric', appid}

/*************** user function ******************/
function init() {
  navigator.geolocation.getCurrentPosition(onCoordSuccess, onCoordError);
  function onCoordSuccess(r) {
    let {latitude: lat, longitude: lon} = r.coords;
    axios.get(url, {params: {...param, lat, lon}}).then(onGetWeather).catch(onError)
    // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
  }

  function onCoordError(err) {
    axios.get(url, {params: {...param, id: '1832501'}}).then(onGetWeather).catch(onError)
    // https://api.openweathermap.org/data/2.5/weather?id={city id}&appid={API key}
  }
}

/*************** event callback *****************/
function onGetWeather(r) {
  console.log(r.data);
  let { main, name, weather } = r.data;
  let { temp } = main;
  let { main: title, description, icon } = weather[0];
  // main: title -> main 이름이 겹쳐서 title로 이름 변경하면 title로 접근 가능
  const $wrap = $('.weather-wrap');
  $wrap.find('.city span').text(name);
  $wrap.find('.img-wp img').attr('src', icons[0] + icon + icons[1]);
  $wrap.find('.temp-wp span').text(temp);
  $wrap.find('.desc-wp .main').text(title);
  $wrap.find('.desc-wp .description').text(description);
}

function onError(err) {
  console.log(err);
}

/*************** event init *********************/


/*************** start init *********************/
init();
