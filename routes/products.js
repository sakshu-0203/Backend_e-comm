const express = require("express");
const router = express.Router();
const productsController = require("../controller/controller_product");

router.post("/add", productsController.addProducts);

router.get("/getall", productsController.getAllProducts);

module.exports = router;
