


// var off = document.getElementById('off');
// var on = document.getElementById('on');

// function changeBox(img) {
//   if(img === 'on') {
//     document.getElementById('on') = '<div class="on"></div>';
//   }
//   else(img === 'off') {
//     document.getElementById('off') = '<div class="on"></div>';
//   }
// }

// function changeBox(img) {
//   document.getElementById('on').src = src;
// }



function toggleBulb(chk) {
	var bulb = document.getElementById('bulb');
	var btOn = document.getElementById('btOn');
	var btOff = document.getElementById('btOff');
	if(chk) {
		bulb.src = '../img/on.png';
		btOn.style.display = 'none';
		btOff.style.display = 'inline-block';
	}
	else {
		bulb.src = '../img/off.png';
		btOn.style.display = 'inline-block';
		btOff.style.display = 'none';
	}
}


