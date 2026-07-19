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

    let totalItems = 0;

    cart.forEach(product => {

        total += product.price * product.quantity;

        totalItems += product.quantity;

        cartItems.innerHTML += `

        <div class="cart-item">

            <img
                src="${product.image}"
                alt="${product.title}"
            >

            <div class="cart-info">

                <h4>${product.title}</h4>

                <p>$${product.price.toFixed(2)}</p>

                <div class="cart-controls">

                    <button onclick="decreaseQuantity(${product.id})">

                        −

                    </button>

                    <span>

                        ${product.quantity}

                    </span>

                    <button onclick="increaseQuantity(${product.id})">

                        +

                    </button>

                </div>

            </div>

            <button
                class="remove-btn"
                onclick="removeItem(${product.id})"
            >

                🗑

            </button>

        </div>

        `;

    });

    subtotal.textContent = "$" + total.toFixed(2);

    cartCount.textContent = totalItems;

}

/*
=========================================================
INITIALIZE
=========================================================
*/

document.addEventListener("DOMContentLoaded", () => {

    loadCart();

});