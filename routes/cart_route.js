const express = require("express");
const router = express.Router();
const cartController = require("../controller/controller_cart");

const verifyToken = require("../middlewere/auth");


router.post("/create",verifyToken, cartController.createCart);

module.exports = router;
