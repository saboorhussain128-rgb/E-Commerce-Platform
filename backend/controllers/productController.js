/*
=========================================================
PRODUCT CONTROLLER
=========================================================
*/

const productService = require("../services/productService");

/*
=========================================================
HOME PAGE
=========================================================
*/

exports.showHomePage = async (req, res) => {

    try {

        const products = await productService.getProducts();

        res.render("home", {

            products

        });

    }

    catch (error) {

        res.status(500).send(error.message);

    }

};

/*
=========================================================
GET PRODUCTS API
=========================================================
*/

exports.getAllProducts = async (req, res) => {

    try {

        const products = await productService.getProducts();

        res.json({

            success: true,

            total: products.length,

            products

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

/*
=========================================================
GET SINGLE PRODUCT
=========================================================
*/

exports.getProduct = async (req, res) => {

    try {

        const product = await productService.getProductById(

            req.params.id

        );

        res.json({

            success: true,

            product

        });

    }

    catch (error) {

        res.status(404).json({

            success: false,

            message: error.message

        });

    }

};