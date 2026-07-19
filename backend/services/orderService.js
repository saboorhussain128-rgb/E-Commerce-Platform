/*
=========================================================
ORDER SERVICE
E-Commerce Platform
=========================================================
*/

const Order = require("../models/Order");

/*
=========================================================
GENERATE ORDER NUMBER
=========================================================
*/

function generateOrderNumber() {

    const timestamp = Date.now();

    const random = Math.floor(Math.random() * 1000);

    return `ORD-${timestamp}-${random}`;

}

/*
=========================================================
CREATE ORDER
=========================================================
*/

async function createOrder(orderData) {

    const totalAmount = orderData.items.reduce(

        (total, item) => total + (item.price * item.quantity),

        0

    );

    const totalQuantity = orderData.items.reduce(

        (total, item) => total + item.quantity,

        0

    );

    const order = new Order({

        orderNumber: generateOrderNumber(),

        items: orderData.items,

        totalAmount,

        totalQuantity

    });

    return await order.save();

}

/*
=========================================================
GET ALL ORDERS
=========================================================
*/

async function getAllOrders() {

    return await Order.find()

        .sort({

            createdAt: -1

        });

}

/*
=========================================================
GET ORDER BY ID
=========================================================
*/

async function getOrderById(id) {

    return await Order.findById(id);

}

/*
=========================================================
EXPORT FUNCTIONS
=========================================================
*/

module.exports = {

    createOrder,

    getAllOrders,

    getOrderById

};