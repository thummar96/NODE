const mongoose = require("mongoose");

const userSchema  = new mongoose.Schema({
    name: {type: String,require: true},
    password: {type: String,require: true},
    isAdmin: {type: Boolean,require: true},
    email: {type: String,require: true},
});

const User = mongoose.model("users",userSchema);

module.exports = User;