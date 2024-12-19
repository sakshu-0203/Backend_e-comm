const express = require("express");
const router = express.Router();
const categeryController = require("../controller/categery");
// const jwt = require("jsonwebtoken");
const verifyToken = require("../middlewere/auth");

router.post("/create", categeryController.createcategary);

router.delete("/delete", categeryController.deletingcatagery);

router.put("/update", categeryController.updatecatagery);

module.exports = router;
