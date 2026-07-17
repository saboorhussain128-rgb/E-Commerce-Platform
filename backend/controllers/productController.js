/*
=========================================================
PRODUCT CONTROLLER
=========================================================
*/

const productService = require("../services/productService");

exports.showHomePage = async (req, res) => {

    try{

        const products = await productService.getProducts();

        res.render("home",{

            products

        });

    }

    catch(error){

        res.status(500).send(error.message);

    }

};

exports.getAllProducts = async (req,res)=>{

    try{

        const products = await productService.getProducts();

        res.json(products);

    }

    catch(error){

        res.status(500).json({

            message:error.message

        });

    }

};