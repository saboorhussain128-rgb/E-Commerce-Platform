/*
=========================================================
SHOPPING CART
=========================================================
*/

// Global Cart
let cart = [];

/*
=========================================================
LOAD CART
=========================================================
*/

function loadCart() {

    const savedCart = localStorage.getItem("shoppingCart");

    if (savedCart) {
        cart = JSON.parse(savedCart);
    }

    updateCartUI();

}

/*
=========================================================
SAVE CART
=========================================================
*/

function saveCart() {

    localStorage.setItem(
        "shoppingCart",
        JSON.stringify(cart)
    );

}

/*
=========================================================
ADD PRODUCT
=========================================================
*/

function addToCart(product) {

    console.log("addToCart() Called");

    const existing = cart.find(item => item.id === product.id);

    if (existing) {

        existing.quantity++;

    } else {

        cart.push({
            ...product,
            quantity: 1
        });

    }

    saveCart();

    updateCartUI();

}

/*
=========================================================
UPDATE CART UI
=========================================================
*/

function updateCartUI() {

    const cartItems = document.getElementById("cartItems");
    const subtotal = document.getElementById("subtotal");
    const cartCount = document.getElementById("cartCount");

    if (!cartItems) return;

    cartItems.innerHTML = "";

    if (cart.length === 0) {

        cartItems.innerHTML = `
            <div class="empty-cart">
                <p>Your cart is empty.</p>
            </div>
        `;

        subtotal.textContent = "$0.00";
        cartCount.textContent = "0";

        return;

    }

    let total = 0;
    let totalQty = 0;

    cart.forEach(item => {

        total += item.price * item.quantity;
        totalQty += item.quantity;

        cartItems.innerHTML += `
            <div class="cart-item">

                <img src="${item.image}" width="60">

                <div>

                    <h4>${item.title}</h4>

                    <p>$${item.price}</p>

                    <p>Qty : ${item.quantity}</p>

                </div>

            </div>
        `;

    });

    subtotal.textContent = "$" + total.toFixed(2);
    cartCount.textContent = totalQty;

}

/*
=========================================================
INITIALIZE
=========================================================
*/

document.addEventListener("DOMContentLoaded", () => {

    loadCart();

});