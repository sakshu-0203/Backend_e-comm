const cartModel = require("../model/cart");

async function createCart(req, res) {
  var userid = req.id;

  const  productid  = req.body;
  console.log(productid);
  try {
    const newCart = cartModel({ productid:productid, userid, quantity: 1 });
    await newCart.save();

    res.status(201).json({
      status: 1,
      message: "Cart created successfully",
      newCart,
    });
  } catch (error) {
    res.status(500).json({ error });
  }
}
module.exports = {
  createCart,
};
