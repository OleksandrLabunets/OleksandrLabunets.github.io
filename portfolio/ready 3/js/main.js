/*price range*/

 // $('#sl2').slider();

	var RGBChange = function() {
	  $('#RGB').css('background', 'rgb('+r.getValue()+','+g.getValue()+','+b.getValue()+')')
	};	
		
/*scroll to top*/

$(document).ready(function(){
	$(function () {
		$.scrollUp({
	        scrollName: 'scrollUp', // Element ID
	        scrollDistance: 300, // Distance from top/bottom before showing element (px)
	        scrollFrom: 'top', // 'top' or 'bottom'
	        scrollSpeed: 300, // Speed back to top (ms)
	        easingType: 'linear', // Scroll to top easing (see http://easings.net/)
	        animation: 'fade', // Fade, slide, none
	        animationSpeed: 200, // Animation in speed (ms)
	        scrollTrigger: false, // Set a custom triggering element. Can be an HTML string or jQuery object
					//scrollTarget: false, // Set a custom target element for scrolling to the top
	        scrollText: '<i class="fa fa-angle-up"></i>', // Text for element, can contain HTML
	        scrollTitle: false, // Set a custom <a> title if required.
	        scrollImg: false, // Set true to use image
	        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
	        zIndex: 2147483647 // Z-Index for the overlay
		});
	});
});

// MY new code------------------------------------------------

let cart = {}; // cart


function init () {
//    получаем файл goods.json
//     $.getJSON("goods.json", goodsOut);
	$.post(
		"admin/core.php",
		{
			"action" : "loadGoods"
		},
		goodsOut
	)
}

function goodsOut(data) {
    //Выводим на страницу
	data = JSON.parse(data);
    // console.log(data);
    let out = '';
    for (let key in data) {

    	out += `<div class="col-sm-4">`;
    	out += `<div class="product-image-wrapper">`;
    	out += `<div class="single-products">`;
    	out += `<div class="productinfo text-center">`;
    	out += `<img src="images/img/${data[key].img}" alt="" width="200px" height="250px">`;
    	out += `<h2>${data[key].cost}грн</h2>`;
    	out += `<p>${data[key].description}</p>`;
    	out += `<button class="btn btn-default add-to-cart" data-id="${key}"><i class="fa fa-shopping-cart"></i>В корзину</button>`;
    	out += `</div>`;
    	out += `</div>`;
    	out += `</div>`;
    	out += `</div>`;

    }
    $('.goods-out').html(out);
    $('.add-to-cart').on('click', addToCart);
}



function addToCart() {
//	add goods into cart
	let id = $(this).attr('data-id');
	// console.log(id);
	if (cart[id]==undefined) {
		cart[id] = 1; // если нет в корзине то делаем равным 1
	}
	else {
		cart[id]++; // если есть то увеличиваем на 1
	}
	saveCart();
}


// сохраниь корзину в storage
function saveCart() {
	localStorage.setItem('cart', JSON.stringify(cart));
}

$(document).ready(function () {
    init();
});