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
GET PRODUCTS
=========================================================
*/

router.get(
    "/products",
    productController.getAllProducts
);

module.exports = router;