//  startNumber : 난수의 시작 수, count : 난수의 갯수
function random(startNumber, count) {
	return Math.floor( Math.random() * count ) + startNumber;
}

// 0 ~ 9를 받으면 '0'을 더해주는 함수
function zp(n) {
	// if(n<10) return '0'+n;
	// else return n;
	
	return (n < 10) ? '0'+n : n;
	// 삼항 연산자 let a = 조건 ? 실행(참) : 실행(거짓)
}

function numberFormat(v) {           // 숫자 3자리마타 쉼표
	return v.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

function getPlayTime(s) {
	if(s >= 3600)
	return zp(parseInt(s/3600)) + ':' + zp(parseInt((s%3600)/60)) + ':' + zp(s%60);
	else
	return zp(parseInt((s%3600)/60)) + ':' + zp(s%60);
}

/* function getPlayTime(s) {
	return Math.floor(s/3600) + ':' + Math.floor(s%3600) + ':' + zp(s%60);
} */

/* function getPlayTime(s) {
	if(Math.floor(s/60) >= 60)
		return Math.floor(s/3600) + ':' + Math.floor(s%3600) + ':' + zp(s%60);
	else
		return zp(Math.floor(s/60)) + ':' + zp(s%60); 
} */