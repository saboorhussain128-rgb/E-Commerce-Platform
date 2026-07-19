/*
=========================================================
CART ACTIONS
=========================================================
*/

/*
=========================================================
INCREASE QUANTITY
=========================================================
*/

function increaseQuantity(id) {

    const product = cart.find(item => item.id == id);

    if (!product) return;

    product.quantity++;

    saveCart();

    updateCartUI();

}

/*
=========================================================
DECREASE QUANTITY
=========================================================
*/

function decreaseQuantity(id) {

    const product = cart.find(item => item.id == id);

    if (!product) return;

    product.quantity--;

    if (product.quantity <= 0) {

        removeItem(id);

        return;

    }

    saveCart();

    updateCartUI();

}

/*
=========================================================
REMOVE PRODUCT
=========================================================
*/

function removeItem(id) {

    cart = cart.filter(item => item.id != id);

    saveCart();

    updateCartUI();

}