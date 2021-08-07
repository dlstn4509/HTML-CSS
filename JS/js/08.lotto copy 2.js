function choiceLotto (){
  var lotto = [];
  for (i=0; lotto.length<6; i++){
    var i = random(1, 45);
    if (lotto.indexOf(i) === -1) lotto.push(i)
    lotto.sort(function(a, b) {return a - b})
  }
  
}










