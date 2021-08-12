/*************** global init ********************/


/*************** user function ******************/


/*************** event callback *****************/
function onClick() {
  this.dataset['img'];                    // JS
  $(this).data('img');                    // jQuery
  $('.img-wrap img').attr('src', $(this).data('img'));
  $('.img-wrap .name').html($(this).data('name'));

  this.dataset['flag'] = 'ABCD';
  $(this).data('flag2', 'ABCD');

  console.log(this.dataset['flag']);
  console.log( $(this).data('flag2') );
}

/*************** event init *********************/
$('.thumb img').click(onClick);

/*************** start init *********************/

