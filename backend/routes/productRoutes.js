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
PRODUCT API ROUTES
=========================================================
*/

// Get All Products

router.get(

    "/products",

    productController.getAllProducts

);

module.exports = router;