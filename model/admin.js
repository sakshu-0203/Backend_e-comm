const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: [true, "Phone number is required"],
    unique: true, // if you want phone to be unique
  },
  role: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("admins", adminSchema);
