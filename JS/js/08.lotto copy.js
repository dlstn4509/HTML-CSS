/* 
function choiceLotto () {
  var numbers = [];
  var lotto = [];
  for (var i=1; i<=45; i++){
    numbers.push(i)
  }

  for (var i=1; i<=6; i++){
    var number = random(0, 45);
    lotto.push(numbers[number]);
  }
  
  console.log(lotto);
}; */

/* function choiceLotto () {
  var lotto = [];
  while (lotto.length < 6) {
    var i = random (1, 45)
    lotto.push(i)
  }
console.log(lotto);
}; */


function choiceLotto () {
  var lottoEl = document.getElementById('lotto')
  var lotto = [];
  var history = document.getElementById('history')

  for (; lotto.length < 6; i++) {
    var i = random (1, 45)
    if (lotto.indexOf(i) === -1) {
      lotto.push(i)
      lotto.sort(function(a, b) {return a - b})
    }
  }
  lottoEl.innerHTML = '';
  for (var i=0, color=''; i<6; i++) {
    if (lotto[i] <= 10) {
      color = 'yellow'
    }
    else if (lotto[i] <= 20) {
      color = 'blue'
    }
    else if (lotto[i] <= 30) {
      color = 'red'
    }
    else {
      color = 'green'
    }
  }
  lottoEl.innerHTML += '<li class="ball '+color+'">'+lotto[i]+'</li>';

function makeColor () {
  
}



history.innerHTML +=
'<li><ul class="d-flex my-3 justify-content-center">'+lottoEl.innerHTML+'</ul></li>'

};


