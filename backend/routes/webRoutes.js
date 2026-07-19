/*
=========================================================
WEB ROUTES
=========================================================
*/

const express = require("express");

const router = express.Router();

const productController = require("../controllers/productController");

/*
=========================================================
HOME PAGE
=========================================================
*/

router.get(

    "/",

    productController.showHomePage

);

/*
=========================================================
PRODUCT DETAILS PAGE
=========================================================
*/

router.get(

    "/product/:id",

    productController.showProductPage

);

module.exports = router;