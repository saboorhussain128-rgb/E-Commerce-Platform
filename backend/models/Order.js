/*
=========================================================
ORDER MODEL
E-Commerce Platform
=========================================================
*/

const mongoose = require("mongoose");

/*
=========================================================
ORDER ITEM SCHEMA
=========================================================
*/

const orderItemSchema = new mongoose.Schema({

    productId: {

        type: Number,

        required: true

    },

    title: {

        type: String,

        required: true,

        trim: true

    },

    price: {

        type: Number,

        required: true,

        min: 0

    },

    quantity: {

        type: Number,

        required: true,

        min: 1

    },

    image: {

        type: String,

        required: true

    }

});

/*
=========================================================
ORDER SCHEMA
=========================================================
*/

const orderSchema = new mongoose.Schema({

    orderNumber: {

        type: String,

        required: true,

        unique: true,

        trim: true

    },

    items: {

        type: [orderItemSchema],

        required: true,

        validate: {

            validator: function (items) {

                return items.length > 0;

            },

            message: "Order must contain at least one product."

        }

    },

    totalAmount: {

        type: Number,

        required: true,

        min: 0

    },

    totalQuantity: {

        type: Number,

        required: true,

        min: 1

    },

    status: {

        type: String,

        enum: [

            "Pending",

            "Processing",

            "Completed",

            "Cancelled"

        ],

        default: "Pending"

    }

},
{
    timestamps: true
});

/*
=========================================================
EXPORT MODEL
=========================================================
*/

module.exports = mongoose.model(

    "Order",

    orderSchema

);