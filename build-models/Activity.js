// models/Activity.js
const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema({
  name: { type: String, required: true },
  application: { type: mongoose.Schema.Types.ObjectId, ref: "Application", required: true },
});

module.exports = mongoose.model("Activity", activitySchema);
