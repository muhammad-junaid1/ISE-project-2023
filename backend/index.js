const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
module.exports = app;

require("dotenv/config");
require("./db");

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const userRouter = require("./routes/user.route");

app.get("/", (req, res) => {
    res.send("Homepage");
})

app.use("/users", userRouter);
