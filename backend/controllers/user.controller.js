const user = require("../models/user.model");

const getAllUsers = async (req, res) => {
  try {
    const result = await user.find();
    res.json({
      status: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      error: error.message,
    });
  }
};

const getSingleUser = async (req, res) => {
  try {
    const result = await user.findOne({email: req.params.email});
    res.json({
      status: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      error: error.message,
    });
  }
};

const createNewUser = async (req, res) => {
  try {
    const newUser = new user(req.body);
    const result = await newUser.save();
    res.json({
      status: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      error: error.message,
    });
  }
};
module.exports = {
  getAllUsers,
  createNewUser,
  getSingleUser
};
