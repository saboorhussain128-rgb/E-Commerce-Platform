/*
=========================================================
E-COMMERCE PLATFORM
Backend Entry Point
=========================================================
*/

require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");

const connectDB = require("./config/db");

const productController = require("./controllers/productController");

const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");

const app = express();

/*
=========================================================
DATABASE
=========================================================
*/

connectDB();

/*
=========================================================
VIEW ENGINE
=========================================================
*/

app.set("view engine", "ejs");

app.set(

    "views",

    path.join(__dirname, "../frontend/views")

);

/*
=========================================================
MIDDLEWARE
=========================================================
*/

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({

    extended: true

}));

app.use(morgan("dev"));

/*
=========================================================
STATIC FILES
=========================================================
*/

app.use(

    express.static(

        path.join(__dirname, "../frontend/public")

    )

);

/*
=========================================================
WEB ROUTES
=========================================================
*/

app.get(

    "/",

    productController.showHomePage

);

/*
=========================================================
PRODUCT API
=========================================================
*/

app.use(

    "/api",

    productRoutes

);

/*
=========================================================
ORDER API
=========================================================
*/

app.use(

    "/api",

    orderRoutes

);

/*
=========================================================
404 PAGE
=========================================================
*/

app.use((req, res) => {

    res.status(404).render("404", {

        title: "404"

    });

});

/*
=========================================================
SERVER
=========================================================
*/

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

    console.log("==============================================");

    console.log("🚀 E-Commerce Platform Started Successfully");

    console.log(`🌐 http://localhost:${PORT}`);

    console.log("==============================================");

});