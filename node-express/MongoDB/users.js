const mongoose = require("mongoose");

const user_Schema = mongoose.Schema;

const new_user_schema = new user_Schema({
    email: { type: String, required: true },
    pass: { type: String, required: true },
});

const User_model = mongoose.model("user", new_user_schema);

module.exports.User_model = User_model;