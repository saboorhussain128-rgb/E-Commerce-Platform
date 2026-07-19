/*
=========================================================
ORDER CONTROLLER
E-Commerce Platform
=========================================================
*/

const orderService = require("../services/orderService");

/*
=========================================================
CREATE ORDER
=========================================================
*/

exports.createOrder = async (req, res) => {

    try {

        const order = await orderService.createOrder(req.body);

        res.status(201).json({

            success: true,

            message: "Order placed successfully.",

            order

        });

    }

    catch (error) {

        console.error(error);

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

/*
=========================================================
GET ALL ORDERS
=========================================================
*/

exports.getAllOrders = async (req, res) => {

    try {

        const orders = await orderService.getAllOrders();

        res.status(200).json({

            success: true,

            count: orders.length,

            orders

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
GET SINGLE ORDER
=========================================================
*/

exports.getOrderById = async (req, res) => {

    try {

        const order = await orderService.getOrderById(

            req.params.id

        );

        if (!order) {

            return res.status(404).json({

                success: false,

                message: "Order not found."

            });

        }

        res.status(200).json({

            success: true,

            order

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};