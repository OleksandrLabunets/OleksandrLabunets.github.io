let cart = {};

function loadCart() {
    // Проверяю если запись в cart
    if (localStorage.getItem('cart')) {
        // если есть - разшивровываю и записываю в переменою;
        cart = JSON.parse(localStorage.getItem('cart'));
        if (!isEmpty(cart)) {
            $('.main_cart').html('Корзина пуста');
        }
        else showCart();

    }
    else {
        $('.main_cart').html('Корзина пуста');
    }
}

function showCart() {
    if (!isEmpty(cart)) {
        $('.main_cart').html('Корзина пуста');
    }
    else {
        $.getJSON('goods.json', function (data) {
            let goods = data;
            let out = '';
            for (let id in cart) {
                out += `<button data-id="${id}" class="del-goods">x</button>`;
                out += `<img src="image/${goods[id].img}">`;
                out += ` ${goods[id].name }`;
                out += ` <button data-id="${id}" class="minus-goods">-</button> `;
                out += ` ${cart[id] }`;
                out += ` <button data-id="${id}" class="pluss-goods">+</button> `;
                out += "Цена: "+Math.round(cart[id]*goods[id].cost);
                out += `<br />`;
            }
            $('.main_cart').html(out);
            $('.del-goods').on('click', delGoods);
            $('.pluss-goods').on('click', plusGoods);
            $('.minus-goods').on('click', minusGoods);
        });
    }

}


function delGoods() {
    // удаляем товар из корзины
    let id = $(this).attr('data-id');
    delete cart[id];
    saveCart();
    showCart();
}

function plusGoods() {
    // Добавляет товар к корзины
    let id = $(this).attr('data-id');
    cart[id]++;
    saveCart();
    showCart();
}

function minusGoods() {
    // Отнимаем товар из корзины
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
    //Сохранить корзину
    localStorage.setItem('cart', JSON.stringify(cart)); // Преобразую корзину в строку;
}

function isEmpty(object) {
    for (let key in object)
        if (object.hasOwnProperty(key)) return true;
        return false;
}

function sendEmail() {
    let ename = $('#ename').val();
    let email = $('#email').val();
    let ephone = $('#ephone').val();
    if (ename != '' && email != '' && ephone != '') {
        if (isEmpty(cart)) {
            $.post(
                "core/mail.php",
                {
                    "ename" : ename,
                    "email" : email,
                    "ephone" : ephone,
                    "cart" : cart
                },
                function(data) {
                    if (data == 1) {
                        alert('Заказ отправлен');
                    }
                    else alert('Повторите заказ');
                }
            );
        }
        else {
            alert('корзина пуста');
        }

    }
    else {
        alert('Заполните поля');
    }
}

$(document).ready(function () {
    loadCart();
    $('.send-email').on('click', sendEmail); // отправить письмо с заказом.
});