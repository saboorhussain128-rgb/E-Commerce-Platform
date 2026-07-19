/*
=========================================================
PRODUCT SERVICE
=========================================================
*/

const API_URL = "https://fakestoreapi.com/products";

/*
=========================================================
GET ALL PRODUCTS
=========================================================
*/

async function getProducts() {

    try {

        const response = await fetch(API_URL);

        if (!response.ok) {

            throw new Error("Unable to fetch products.");

        }

        return await response.json();

    }

    catch (error) {

        console.error("Product Service Error:", error.message);

        throw error;

    }

}

/*
=========================================================
GET SINGLE PRODUCT
=========================================================
*/

async function getProductById(id) {

    try {

        const response = await fetch(`${API_URL}/${id}`);

        if (!response.ok) {

            throw new Error("Product Not Found");

        }

        return await response.json();

    }

    catch (error) {

        console.error("Product Service Error:", error.message);

        throw error;

    }

}

module.exports = {

    getProducts,

    getProductById

};