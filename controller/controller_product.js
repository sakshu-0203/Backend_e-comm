const productsModel = require("../model/products");

async function addProducts(req, res) {
  var { name, price, disc_price, description, img, categary_type } = req.body;

  console.log("aaa");

  try {
    if (
      !name ||
      !price ||
      !disc_price ||
      !description ||
      !img ||
      !categary_type
    ) {
      return res.status(400).json({ message: "please enter all filed" });
    }
    var products = new productsModel({
      name,
      price,
      disc_price,
      description,
      img,
      categary_type,
    });
    console.log(products);

    await products.save();

    res.status(201).json({
      message: " Added successfully",
      products,
    });
  } catch (error) {
    res.status(500).json({ message: "something went wrong ", error });
  }
}

module.exports = {
  addProducts,
};
