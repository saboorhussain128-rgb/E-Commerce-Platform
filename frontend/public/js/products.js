/*
=========================================================
PRODUCT EVENTS
=========================================================
*/

document.addEventListener("DOMContentLoaded", () => {

    console.log("Products JS Loaded");

    const buttons = document.querySelectorAll(".add-cart-btn");

    console.log("Buttons Found:", buttons.length);

    buttons.forEach(button => {

        button.addEventListener("click", handleAddToCart);

    });

});

function handleAddToCart(event) {

    const button = event.currentTarget;

    const product = {

        id: Number(button.dataset.id),

        title: button.dataset.title,

        price: Number(button.dataset.price),

        image: button.dataset.image

    };

    console.log("Adding Product:", product);

    if (typeof addToCart !== "function") {

        console.error("addToCart() is not loaded.");

        return;

    }

    addToCart(product);

}