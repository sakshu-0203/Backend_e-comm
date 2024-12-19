const categaryModel = require("../model/categary");
// var jwt = require('jsonwebtoken');
// var bcrypt = require("bcrypt");

async function createcategary(req, res) {
  const { categary_name } = req.body;

  try {
    const newcategary = categaryModel({ name: categary_name });
    await newcategary.save();

    res.status(201).json({
      status: 1,
      message: "task done",
      newcategary,
    });
  } catch (error) {
    res.status(500).json({ error });
  }
}

async function deletingcatagery(req, res) {
  const categaryID = req.body.categaryID;
  console.log(categaryID);

  if (!categaryID) {
    res.status(400).json({ message: "not found" });
  }

  try {
    var a = await categaryModel.findOneAndDelete({ _id: categaryID });

    res.status(201).json({ status: 1, message: "task Deleted", a });
  } catch (error) {
    res.status(500).json({ error });
  }
}

async function updatecatagery(req, res) {
  const categaryID = req.params.categaryID;
  const name = req.body.name;

  try {
    var updatecatagery = await categaryModel.findByIdAndUpdate(categaryID, {
      name: "name"},{new:true,runValidators:true});
    res
      .status(201)
      .json({ status: 1, message: "categary Updated", updatecatagery });
  } catch (error) {
    res.status(500).json({ error });
  }
}

module.exports = {
  createcategary,
  deletingcatagery,
  updatecatagery,
};
