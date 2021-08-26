// 3c04f92240b9cdfbc2e0280668623b5d
// https://api.openweathermap.org/data/2.5/weather?q=seoul&appid=3c04f92240b9cdfbc2e0280668623b5d&units=metric
// https://openweathermap.org/img/wn/01d@2x.png


navigator.geolocation.getCurrentPosition(onCoordSuccess, onCoordError);

function onCoordSuccess(r) {
  let {latitude: lat, longitude: lon} = r.coords;
  console.log(lat, lon);
}

function onCoordError(err) {
console.log("🚀 ~ file: 14.weather.js ~ line 14 ~ onCoordError ~ err", err)

}


/* navigator.clipboard.writeText("<Hello World>").then(() => {
  console.log('카피되었습니다.');
}) */



/*************** global init ********************/


/*************** user function ******************/


/*************** event callback *****************/


/*************** event init *********************/


/*************** start init *********************/

