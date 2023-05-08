
const express = require("express");
const postControllers = require("../controllers/post.controller");

const router = express.Router();

router.get("/", postControllers.getAllPosts)
router.get("/:userEmail", postControllers.getUserPosts)
router.post("/", postControllers.createNewPost)

module.exports = router;