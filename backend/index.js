const express = require("express");
const app = express();
require("./db");

app.get("/", (req, res) => {
    res.send("Homepage");
})

app.listen(5000, () => {
    console.log("Server is listening at port 5000");
})