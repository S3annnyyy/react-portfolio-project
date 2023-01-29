// Schema for retrieving form data from contactPage.js
const mongoose = require("mongoose");
const userDataSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    date: { type: Date, default: Date.now }
});
const userData = mongoose.model("userData", userDataSchema, "userData");

module.exports = userData;