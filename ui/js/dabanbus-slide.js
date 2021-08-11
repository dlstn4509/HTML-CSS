function Slide(_parent, _opt) {             // 공장 만들기
  var opt = _opt || {};
  this.parent = _parent;
  this.effect = opt.effect || 'horizontal';
  this.speed = Number(opt.speed) || 500;
  this.autoPlay = opt.autoPlay === false ? false : true; 
  this.autoPlaySpeed = Number(opt.autoPlaySpeed) || 3000;
  
  if(
    this.effect.toLowerCase() !== 'horizontal' &&
    this.effect.toLowerCase() !== 'vertical' &&
    this.effect.toLowerCase() !== 'fade')
    {
      this.effect = 'horizontal'
    }
  this.init();
}

Slide.prototype.init = function() {
  console.log(this);
}







/*
{
  effect: 'horizontal', 'vertical', 'fade'
  speed: 2000,
  autoPlay: true,
  autoPlaySpeed: 3000
}
*/