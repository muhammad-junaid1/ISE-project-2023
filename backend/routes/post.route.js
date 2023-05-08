
const express = require("express");
const postControllers = require("../controllers/post.controller");

const router = express.Router();

router.get("/", postControllers.getAllPosts)
router.post("/", postControllers.createNewPost)

module.exports = router;