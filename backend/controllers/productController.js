/*
=========================================================
PRODUCT CONTROLLER
=========================================================
*/

const productService = require("../services/productService");

/*
=========================================================
GET ALL PRODUCTS
=========================================================
*/

exports.getAllProducts = async (req, res) => {

    try {

        const products = await productService.getProducts();

        res.status(200).json({
            success: true,
            totalProducts: products.length,
            products
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};