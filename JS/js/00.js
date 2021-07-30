function bt(chk) {
  var bulb = document.getElementsById('bulb')
  var off = document.getElementsById('off')
  var on = document.getElementsById('on')

  if(chk) {
    bulb.src = '../img/on.png';
  }
  else {
    bulb.src = '../img/off.png';
  }  
} 




