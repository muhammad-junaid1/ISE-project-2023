const post = require('../models/post.model');

const createNewPost = async (req, res) => {
  try {
    const newPost = new post(req.body);
    const result = await newPost.save();
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

const getAllPosts = async (req, res) => {
  try {
    const result = await post.find({});
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

const getUserPosts = async (req, res) => {
  try {
    const result = await post.find({user: req.params.userEmail});
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
    createNewPost,
    getAllPosts,
    getUserPosts
};
