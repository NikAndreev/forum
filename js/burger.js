$(document).ready(function(){
	$('.header-top__burger').click(function(event) {
		$('.header-top__burger, .header-top__content').toggleClass('active');
	});
	$('.header-top__link').click(function(event) {
		$('.header-top__burger, .header-top__content').removeClass('active');
	});
});
