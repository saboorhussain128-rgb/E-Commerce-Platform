/*
=========================================================
E-COMMERCE PLATFORM
Backend Entry Point
=========================================================
*/

// =========================================================
// LOAD ENVIRONMENT VARIABLES
// =========================================================

require("dotenv").config();

// =========================================================
// IMPORT PACKAGES
// =========================================================

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");

// =========================================================
// IMPORT DATABASE
// =========================================================

const connectDB = require("./config/db");

// =========================================================
// IMPORT CONTROLLERS
// =========================================================

const productController = require("./controllers/productController");

// =========================================================
// IMPORT ROUTES
// =========================================================

const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");

// =========================================================
// CREATE EXPRESS APPLICATION
// =========================================================

const app = express();

// =========================================================
// CONNECT TO DATABASE
// =========================================================

connectDB();

// =========================================================
// VIEW ENGINE CONFIGURATION
// =========================================================

app.set("view engine", "ejs");

app.set(
    "views",
    path.join(__dirname, "../frontend/views")
);

// =========================================================
// STATIC FILES
// =========================================================

app.use(
    express.static(
        path.join(__dirname, "../frontend/public")
    )
);

// =========================================================
// GLOBAL MIDDLEWARE
// =========================================================

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));

// =========================================================
// WEB ROUTES
// =========================================================

// Home Page

app.get(
    "/",
    productController.showHomePage
);

// =========================================================
// API ROUTES
// =========================================================

// Product API

app.use(
    "/api",
    productRoutes
);

// Order API

app.use(
    "/api",
    orderRoutes
);

// =========================================================
// 404 PAGE
// =========================================================

app.use((req, res) => {

    res.status(404).render("404", {

        title: "Page Not Found"

    });

});

// =========================================================
// START SERVER
// =========================================================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

    console.log("====================================================");

    console.log("🚀 E-Commerce Platform Started Successfully");

    console.log(`🌐 Server Running : http://localhost:${PORT}`);

    console.log("====================================================");

});