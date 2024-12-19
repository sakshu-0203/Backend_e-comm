const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  disc_price: {
    type: Number,
    required: true,
  },
  rating: {
    type: String,
    default: "99",
    required: false,
  },
  description: {
    type: String,
    required: true,
  },

  img: {
    type: String,
    required: true,
  },
  categary_type: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "categary",
  },
});

module.exports = mongoose.model("products", productsSchema);
