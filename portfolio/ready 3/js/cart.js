// let cart = {};

function loadCart() {
    // Проверка на наявность записей в localStorage
    if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart')); // строка в обект
            showCart();

    }
    else {
        $('.just-cart').html('<h1>Корзина пуста</h1>');
    }
}

function showCart() {
    if (!isEmpty(cart)) {
        $('.just-cart').html('<h1>Корзина пуста</h1>');
    }
    else {
        $.getJSON('goods.json', function (data) {
            let goods = data;
            let out = '';
            for (let id in cart) {
                out += `<tr>`;
                out += `<td class="cart_product"><a href=""><img src="images/img/${goods[id].img}" 							alt="" width="125px" height="100px" ></a>`;
                out += `<td class="cart_description">
                              <h4><a href="">${goods[id].name}<br/>${goods[id].description}</a></h4>`;
                out += `<td class="cart_price">
                                    <p>${goods[id].cost}</p>`;
                out += ` <td class="cart_quantity">
                                    <div class="cart_quantity_button">
                                        <button data-id="${id}" class="minus-goods">-</button>
                                         ${cart[id]} 
                                        <button data-id="${id}" class="plus-goods">+</button>
                                    </div>`;
                out += `<td class="cart_total">
                                    <p class="cart_total_price">${Math.round(parseFloat(cart[id]*goods[id].cost) * 100) / 100} грн</p>`;
                out += `<td class="cart_delete">
                                    <button id="del-cart" class="cart_quantity_delete" data-id="${id}">X</button>`;
                out += `</td>`;
                out += `</td>`;
                out += `</td>`;
                out += `</td>`;
                out += `</td>`;
                out += `</td>`;
                out += `</tr>`;
            }
            $('.just-cart').html(out);
            $('#del-cart').on('click', delGoods);
            $('.plus-goods').on('click', plusGoods);
            $('.minus-goods').on('click', minusGoods);
        });
    }
}

function delGoods () {
    // Удаляем товар из корзины
    let id = $(this).attr('data-id');
    delete cart[id];
    saveCart();
    showCart();
}

function plusGoods () {
    // добавляет товар в корзины
    let id = $(this).attr('data-id');
    cart[id]++;
    saveCart();
    showCart();
}

function minusGoods () {
    // отнимает товар в корзины
    let id = $(this).attr('data-id');
    if (cart[id] == 1) {
        delete cart[id];
    }
    else {
        cart[id]--;
    }
    saveCart();
    showCart();
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function isEmpty(object) {
    // проверка корзины на пустоту
    for (let key in object)
        if (object.hasOwnProperty(key)) return true;
        return false;
}

function sendEmail() {
    let name =  $('#name').val();
    let email = $('#email').val();
    let phone = $('#phone').val();
    if (name != '' && email != '' && phone != '') {
        if (isEmpty(cart)) {
            $.post(
                "core/mail.php",
                {
                    "name" : name,
                    "mail" : email,
                    "phone" : phone,
                    "cart" : cart
                },
                function(data){
                    console.log(data);
                }
            )
        }
        else {
            $('.warn').css("display", "block");
        }

    }
    else {
        $('.empty-gap').css("border-color", "red");
    }
}

$(document).ready(function () {
    loadCart();
    $('.btn-order').on('click', sendEmail); // Отправка письма с заказом
});