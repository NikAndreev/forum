$(document).ready(function(){
	$('.header-top__burger').click(function(event) {
		$('.header-top__burger, .header-top__content').toggleClass('active');
	});
	$('.header-top__link').click(function(event) {
		$('.header-top__burger, .header-top__content').removeClass('active');
	});
});





$('a[href*="#"]').on('click', function (e) {
  e.preventDefault();
 
  $('html, body').animate({
    scrollTop: $($(this).attr('href')).offset().top
  }, 800, 'linear');
});






$(document).ready(function() {

	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			$('.thanks').addClass("active");
			$(".form").trigger("reset");
		});
		return false;
	});

	$('.thanks__btn').click(function(){
		$('.thanks').removeClass("active");
	});
	
});





$(".registration__phone").mask("+7 (999) 999-99-99");