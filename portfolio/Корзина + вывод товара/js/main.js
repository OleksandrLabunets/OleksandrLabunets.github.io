let cart = {}; //Корзина

function init () {
//    получаем файл goods.json
    $.getJSON("goods.json", goodsOut);
}

function goodsOut(data) {
    //Выводим на страницу
    console.log(data);
    let out = '';
    for (let key in data) {
        // out +='<div class="cart">';
        // out +='<p class="name">'+data[key].name+'</p>';
        // out +='<img src="image/'+data[key].img+'" alt="grape">';
        // out +='<div class="cost">'+data[key].cost+'</div>';
        // out +='<button class="add-to-cart">Купить</button>';
        // out +='</div>';
        //    -------------------------
        out +=`<div class="cart"`;
        out +=`<p class="name">${data[key].name}</p>`;
        out +=`<img src="image/${data[key].img}" alt="grape">`;
        out +=`<div class="cost">${data[key].cost}</div>`;
        out +=`<button class="add-to-cart" data-id="${key}">Купить</button>`;
        out +=`</div>`;
    }
    $('.goods-out').html(out);
    $('.add-to-cart').on('click', addToCart)
}

function addToCart() {
//    Добавляем товар в корзину
    let id = $(this).attr('data-id');
    console.log(id);
    if (cart[id]==undefined) {
        cart[id] = 1; // если нет товаро то равно 1
    }
    else cart[id]++; // если такой товар есть то +1
    showMiniCart();
    saveCart();
}

function saveCart() {
    //Сохранить корзину
    localStorage.setItem('cart', JSON.stringify(cart)); // Преобразую корзину в строку;
}

function showMiniCart() {
    // показую мини корзину
    let out = "";
    for (var key in cart) {
        out += key + '---' + cart[key] + '<br />';
    }
    $('.mini_cart').html(out);
}

function loadCart() {
    // Проверяю если запись в cart
    if (localStorage.getItem('cart')) {
        // если есть - разшивровываю и записываю в переменою;
        cart = JSON.parse(localStorage.getItem('cart'));
        showMiniCart();
    }

}


$(document).ready(function () {
    init();
    loadCart();
});