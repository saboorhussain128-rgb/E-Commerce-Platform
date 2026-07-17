/*
=========================================================
PRODUCTS
=========================================================
*/

document.addEventListener("DOMContentLoaded", () => {

    const buttons = document.querySelectorAll(".add-cart-btn");

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            const product = {

                id: Number(button.dataset.id),

                title: button.dataset.title,

                price: Number(button.dataset.price),

                image: button.dataset.image

            };

            addToCart(product);

        });

    });

});