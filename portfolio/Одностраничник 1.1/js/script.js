// fixed header when scrolling ------------------------------
$(document).ready(function() {
	$('.header').removeClass("default");
	$(window).scroll(function() {
		if($(this).scrollTop() > 20) {
			$('.header').addClass("default").fadeIn('slow');
		}
		else {
			$('.header').removeClass("default").fadeIn('slow');
		};
	});
});
