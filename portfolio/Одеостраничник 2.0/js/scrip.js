menu.onclick = function myFunction() {
	var x = document.getElementById('myTopnav');

	if (x.className === "topnav") {
		x.className += " responsive";
	}
	else {
		x.className = "topnav";
	}
}



// $("#myTopnav").on("click","a", function (event) {
//         event.preventDefault();
//         var id  = $(this).attr('href'),
//             top = $(id).offset().top;
//         $('body,html').animate({scrollTop: top}, 1500);
//     });
