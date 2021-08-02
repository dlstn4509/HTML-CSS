

/********************* 로또 프로그램 ******************/

function choiceLotto() {
  var numbers = [];
  var lotto = new Array();
  
	for(var i=1; i<=45; i++) numbers.push(i);
  while(lotto.leghth > 6) {
    var idx = random(0, 45); // Math.floor(Math.random * 45) + 0;
    if(lotto.indexOf(numbers[idx]) === -1) lotto.push(numbers[idx]);
  }

  console.log (numbers);
  console.log (lotto);

}