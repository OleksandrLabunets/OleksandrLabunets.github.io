	$('#mainForm').validate({
		rules: {
			name: {
				required: true,  
				minlength: 3,
			},
			email: {
				required: true,
				email: true,
			},
			phone: {
				required: true,
				minlength: 11,
			}
		},

		message: {
			name: {
				required: 'field Full Name is required for filling',
			},
			email: {
				required: 'field Email is required for filling',
			},
			phone: {
				required: 'field Phone is required for filling'
			}
		},
		focusCleanup: false,

		submitHandler: function () {
			$('.success-form').css("display", "block");	
		}

	});



$(document).ready(function () {
	$('#services-down').on('click', function () {
		$('.drop-down-menu').slideToggle('fast');
	});
});

$(document).ready(function () {
	$('.navbar-toggle').on('click', function() {
		$('.mob-menu').addClass('active');
	});
	$('.bnt-hide').on('click',function() {
		$('.mob-menu').removeClass('active');
	});
});

//img hover solution------------

// $(document).ready(function () {
// 	$('.cat-img').mouseover(function () {
// 		$('.plus').css("display", "block");
// 	});
//     $('.cat-img').mouseout(function () {
//         $('.plus').css("display", "none");
//     });
// });


// send from ------------------------------------------


function sendEmail() {
	let fName = $('#name').val();
	let inpEmail = $('#Email').val();
	let inpPhone = $('#phone').val();
	let inpSubject = $('#subject').val();
    let InfoFromClient = $('#add-inform').val();

	if ( fName!='' && inpEmail!='' && inpPhone!='') {
		$.post (
			"core/mail.php",
			{
				"fullName" : fName,
				"email" : inpEmail,
				"phone" : inpPhone,
				"subj" : inpSubject,
				"inf" : InfoFromClient
			},
			function(data) {
				// console.log(data);
			}
		);
	}
	else {
		$('.empty-gap').css("border-color", "red");
	}

}


$(document).ready(function () {
	$('#s-info').on('click', sendEmail);
})


// button up---------------------------------------------------------

$(document).ready(function () {
	let $btnTop = $('.btn-top');
		$(window).on('scroll', function(){
		if ( $(window).scrollTop() > 100){
		$btnTop.fadeIn();
		}
		else {
			$btnTop.fadeOut();
		}
	});

	$btnTop.on('click', function() {
		$('html,body').animate({scrollTop:0}, 800);
	});
});