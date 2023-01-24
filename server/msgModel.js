const mongoose = require("mongoose");
const userDataSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String
});
const userData = mongoose.model("userData", userDataSchema, "userData");

module.exports = userData;