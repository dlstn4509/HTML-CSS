function changeColor (a) {
	if (a === '') (document.getElementById('box').style.backgroundColor = 'transparent');

	else (document.getElementById('box').style.backgroundColor = a);
}



function showImg(a) {
	document.getElementById('mainImg').src = a;
}