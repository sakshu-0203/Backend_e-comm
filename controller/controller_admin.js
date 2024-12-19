const adminModel = require("../model/admin");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt");

//creating a new admin
async function registeradmin(req, res) {
  const { name, phone, password } = req.body;

  if (!phone) {
    return res.status(400).json({ message: "Phone number is required" });
  }

  console.log(name, phone, password);

  var saltRounds = 10;

  var hashpassword = await bcrypt.hash(password, saltRounds);

  try {
    var newadmin = new adminModel({ name, phone, password: hashpassword });
    await newadmin.save();

    res.status(201).json({
      status: 1,
      message: "Admin registered successfully",
      newadmin,
    });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error });
  }
}

async function loginUser(req, res) {
  const { phone, password } = req.body;
  try {
    const admin = await adminModel.findOne({ phone });
    if (!admin) {
      return res.status(404).json({
        message:
          "User not found with this number please enter valid mobile number ",
      });
    }
    const decryptPassword = await bcrypt.compare(password, admin.password);
    console.log(decryptPassword);
    console.log(admin.password);

    if (decryptPassword) {
      var token = jwt.sign(
        {
          id: admin._id,
          phone: admin.phone,
          role: "admin",
        },
        "privatekey",
        { expiresIn: "365d" }
      );

      return res.status(200).json({
        message: "admin found successfully",
        admin,
        token,
      });
    } else {
      return res.status(401).json({ message: "Invalid password" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = {
  registeradmin,
  loginUser,
};
