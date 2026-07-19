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

            title: "ShopEase",

            products

        });

    }

    catch (error) {

        console.error(error);

        res.status(500).render("404", {

            title: "Server Error"

        });

    }

};

/*
=========================================================
SHOW PRODUCT DETAILS PAGE
=========================================================
*/

exports.showProductPage = async (req, res) => {

    try {

        const product = await productService.getProductById(

            req.params.id

        );

        res.render("product", {

            title: product.title,

            product

        });

    }

    catch (error) {

        console.error(error);

        res.status(404).render("404", {

            title: "Product Not Found"

        });

    }

};

/*
=========================================================
GET ALL PRODUCTS API
=========================================================
*/

exports.getAllProducts = async (req, res) => {

    try {

        const products = await productService.getProducts();

        res.status(200).json({

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
GET SINGLE PRODUCT API
=========================================================
*/

exports.getProduct = async (req, res) => {

    try {

        const product = await productService.getProductById(

            req.params.id

        );

        res.status(200).json({

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