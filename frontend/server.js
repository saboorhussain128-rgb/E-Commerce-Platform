/*
=========================================================
E-Commerce Platform
Frontend Server
=========================================================
*/

const express = require("express");
const path = require("path");

const app = express();

// View Engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Static Files
app.use(express.static(path.join(__dirname, "public")));

// Home Page
app.get("/", (req, res) => {
    res.render("home");
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Frontend running on http://localhost:${PORT}`);
});