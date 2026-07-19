/*
=========================================================
PRODUCT ROUTES
=========================================================
*/

const express = require("express");

const router = express.Router();

const productController = require("../controllers/productController");

/*
=========================================================
WEB ROUTE
=========================================================
*/

router.get(

    "/",

    productController.showHomePage

);

/*
=========================================================
API ROUTES
=========================================================
*/

router.get(

    "/products",

    productController.getAllProducts

);

router.get(

    "/products/:id",

    productController.getProduct

);

module.exports = router;