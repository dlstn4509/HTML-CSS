
function toggleBulb(a) {
	var onButton = document.getElementById('onButton')
	var offButton = document.getElementById('offButton')
	var img = document.getElementById('imgs')
	if(a) {
		img.src = '../img/on.png';
		onButton.style.display = 'none';
		offButton.style.display = 'inline-block';
	}
	else {
		img.src = '../img/off.png';
		onButton.style.display = 'inline-block';
		offButton.style.display = 'none';
	}
}



