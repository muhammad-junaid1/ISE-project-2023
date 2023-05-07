const mongoose = require("mongoose");
const app = require("./index");

    const mongodb_uri = process.env.mongodb_uri;
    mongoose.connect(mongodb_uri)
    .then(() => {
        console.log("Database Connected");
        app.listen(5000, () => {
            console.log("Server is listening at port 5000");
        })

    })
    .catch((err) => {
        console.log("Database Connection Error", err);
    })



