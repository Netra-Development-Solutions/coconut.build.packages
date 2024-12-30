// models/Application.js
const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  appCode: { type: String, required: true, unique: true, index: true, dropDups: true },
  appId: { type: String, unique: true, index: true, dropDups: true },
  modules: [{ type: mongoose.Schema.Types.ObjectId, ref: "Module" }],
  icon: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model("Application", applicationSchema);