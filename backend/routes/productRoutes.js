/*
=========================================================
PRODUCT ROUTES
=========================================================
*/

const express = require("express");

const router = express.Router();

const productController = require("../controllers/productController");

router.get(

    "/",

    productController.showHomePage

);

router.get(

    "/products",

    productController.getAllProducts

);

module.exports = router;