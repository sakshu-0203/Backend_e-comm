const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  productid: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "products",
  },
  quantity: {
    type: Number,
    required: true,
  },
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "users",
  },
});
module.exports = mongoose.model("cart", cartSchema);
