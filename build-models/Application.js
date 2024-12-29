// models/Application.js
const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

module.exports = mongoose.model("Application", applicationSchema);