const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  bloodGroup: {
    type: String, 
    required: true
  }
});

const postModel = mongoose.model("Post", postSchema);
module.exports = postModel;
