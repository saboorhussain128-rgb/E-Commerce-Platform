/*
=========================================================
SHOPPING CART
=========================================================
*/

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

    const existingProduct = cart.find(

        item => item.id === product.id

    );

    if (existingProduct) {

        existingProduct.quantity++;

    }

    else {

        cart.push({

            id: product.id,

            title: product.title,

            price: product.price,

            image: product.image,

            quantity: 1

        });

    }

    saveCart();

    updateCartUI();

}

/*
=========================================================
UPDATE UI
=========================================================
*/

function updateCartUI() {

    console.log(cart);

}

/*
=========================================================
INITIALIZE
=========================================================
*/

loadCart();