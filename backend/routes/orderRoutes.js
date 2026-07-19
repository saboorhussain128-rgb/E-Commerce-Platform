/*
=========================================================
ORDER ROUTES
E-Commerce Platform
=========================================================
*/

const express = require("express");

const router = express.Router();

const orderController = require("../controllers/orderController");

/*
=========================================================
CREATE ORDER
POST /api/orders
=========================================================
*/

router.post(

    "/orders",

    orderController.createOrder

);

/*
=========================================================
GET ALL ORDERS
GET /api/orders
=========================================================
*/

router.get(

    "/orders",

    orderController.getAllOrders

);

/*
=========================================================
GET SINGLE ORDER
GET /api/orders/:id
=========================================================
*/

router.get(

    "/orders/:id",

    orderController.getOrderById

);

module.exports = router;