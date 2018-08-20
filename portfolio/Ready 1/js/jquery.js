// open mobile menu--------------------
$('#mobile-btn-menu').on('click', function () {
	$('.drop-mob-menu').toggleClass('menu_active');
});

// placeholder input--------------------------
$(document).ready(function() {
	$('#mob-phone').mask("999-999-9999");
	$('#home-page').mask("999-999-9999");
	$('#zip-code').mask("99999");
});

// checkbox --------------------------
$(document).ready(function () {
	$('.checkmark').on('click', function () {
		$(this).toggleClass('back-checkmark');	
		if ( $(this).hasClass('back-checkmark') ) {
			$(this).css("background", "#009FE8");
		}
		else {
			$(this).css("background", "#eee");
		}
	});
});

// solution for mobile-button
$(document).ready(function () {
	$('.button-mob-menu').mouseover(function () {
		$('.icon-bar').css("background", "#fff");
	});
	$('.button-mob-menu').mouseout(function () {
		$('.icon-bar').css("background", "#000")
	});
});

// slider ---------------------------
$(document).ready(function () {
	$('.carousel').carousel({
		interval: 2500,
		keyboard: false
	});
	$('.carousel-control').mouseover(function () {
		$('.glyphicon').css("color", "#fff");
	});
	$('.carousel-control').mouseout(function () {
		$('.glyphicon').css("color", "#ccc");
	});
});

// send form ---------------------

function sendEmail() {
	let firstName = $('#first-name').val();
	let lastName = $('#last-name').val();
	let inputEmail = $('#input-email').val();
    let mobPhone = $('#mob-phone').val();
    let homePage = $('#home-page').val();
    let zipCode = $('#zip-code').val();
    let InfoFromClient = $('#add-inform').val();

    if (firstName!='' && lastName!='' && inputEmail!='' && mobPhone!='' && zipCode!='') {
		$.post(
			"core/mail.php",
			{
				"firstName" : firstName,
				"lastName" : lastName,
				"email" : inputEmail,
				"phone" : mobPhone,
				"homePage" : homePage,
				"zipCode" : zipCode,
				"inf" : InfoFromClient
			},
			function(data) {
				// console.log(data);
			}
		);

	}
	else {
		$('.empty-inp').css("border-color", "red");
		return false;
	}
}


function subscribeEmail() {
    let subEmail = $('#subscr').val();
    if (subEmail!='') {
		$.post(
			"core/submail.php",
			{
				"clientEmail" : subEmail
			}
		);
    }
    else {
        $('#subscr').css("border-color", "red");
    }
}



$(document).ready(function () {
	$('.send-email').on('click', sendEmail);
	$('.subscribe').on('click', subscribeEmail);
});
