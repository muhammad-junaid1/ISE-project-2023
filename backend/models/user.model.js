const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    uid: {
        type: String, 
        required: true
    },
    userName: {
        type: String, 
        required: true,
    }, 
    email: {
        type: String, 
        required: true, 
    }, 
    mobileNumber: {
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
    photoURL: {
        type: String, 
        required: true,
    }
});

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;