$(document).ready(function(){
	$('.imgal-img').click(function(){
		let imageSrc = $(this).attr("src");
		let imageAlt = $(this).attr("alt");

		$('.imgal-container').hide();

		$('body').append(
			'<div class="imgal-modal">'+
			'<span id="imgal-modal-close"">X</span>'+
			'<img src="' + imageSrc + '" alt="' + imageAlt + '" class="imgal-modal-img"></img>'+
			'</div'
		).hide().show('fast');

		$('#imgal-modal-close').click(function(){
			$('.imgal-container').show();
			$('.imgal-modal').hide('fast', function(){
				$(this).remove();
			});
		});
	});
});

$( ".menu-off" ).click(function() {
	$( this ).removeClass( "menu-off" );
	$( this ).addClass( "menu-on" );
   $('.floating-button-menu-close').addClass('menu-on');
  });
  $('.floating-button-menu-close').click(function(){
	$( this ).addClass( "menu-off" );
	$( this ).removeClass( "menu-on" );
	$('.floating-button-menu').toggleClass('menu-on');
  });

  var circlePosition = document.getElementsByClassName('circle');
console.log(circlePosition);

function position() {
  for (var i = 0; i < circlePosition.length; i++ ) {
    //give circle a random position
    var posx = (Math.random() * ($(document).width() - 0)).toFixed();
    var posy = (Math.random() * ($(document).height() - 0)).toFixed();



    //apply position to circle
    $(circlePosition[i]).css({
      'position':'absolute',
      'left':posx+'px',
      'top':posy+'px',
    })
  } 
} //end function position

var circleTotal = circlePosition.length;
/*
$('.circle').click(function() {
  $(this).fadeOut();
  circleTotal = circleTotal - 1;
  console.log(circleTotal);

  if(circleTotal == 0) {
    position()
    $('.circle').fadeIn();
  }

});
*/
position();