function choiceLotto (){
  var html = document.getElementById('lotto')
  var lotto = [];
  for (i=0; lotto.length<6; i++){
    var i = random(1, 45);
    if (lotto.indexOf(i) === -1) lotto.push(i)
    lotto.sort(function(a, b) {return a - b})
  }
  for (var i=0, color=''; i<lotto.length; i++){
    if (lotto[i] <= 10){
      color = 'yallow'
    }
    else {
      'black'
    }
  }
  html.innerHTML = '<li class="ball'+color+'">'+lotto+'</li>';
}





/* for (var i=0, color=''; i<6; i++) {
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
} */




