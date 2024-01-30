// JavaScript для функціональності кошика
let cartItems = [];
let totalPrice = 0;

function addToCart(product) {
    cartItems.push(product);
    updateCart();
}

function updateCart() {
    let cartList = document.getElementById('cart-items');
    cartList.innerHTML = '';

    totalPrice = 0;
    cartItems.forEach(item => {
        let listItem = document.createElement('li');
        listItem.textContent = item;
        cartList.appendChild(listItem);

        // Припустимо, що ціна різних товарів різна
        if (item === 'socks1') {
            totalPrice += 10;
        } else if (item === 'socks2') {
            totalPrice += 12;
        }
    });

    document.getElementById('total').textContent = 'Загальна сума: $' + totalPrice;
}

function checkout() {
    alert('Загальна сума вашого замовлення: $' + totalPrice);
}

function clearCart() {
    cartItems = [];
    totalPrice = 0;
    updateCart();
}
