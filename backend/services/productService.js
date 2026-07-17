/*
=========================================================
PRODUCT SERVICE
Fetch Products from FakeStore API
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
            throw new Error("Failed to fetch products");
        }

        const products = await response.json();

        return products;

    } catch (error) {

        console.error("Error Fetching Products:", error.message);

        throw error;
    }
}

module.exports = {
    getProducts
};