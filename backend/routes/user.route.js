const express = require("express");
const userControllers = require("../controllers/user.controller");

const router = express.Router();

router.get("/", userControllers.getAllUsers);
router.get("/:id", userControllers.getSingleUser);
router.post("/", userControllers.createNewUser)

module.exports = router;