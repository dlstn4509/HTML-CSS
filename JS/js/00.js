function bt(chk) {
  var bulb = document.getElementsById('bulb')
  var on = document.getElementsById('on')
  var off = document.getElementsById('off')
  if(chk) {
    bulb.src = '../img/on.png';
  }
  else {
    bulb.src = '../img/off.png';
  }  
} 