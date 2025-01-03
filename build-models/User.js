// models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  groups: [{ type: String }],
  activities: [{ type: mongoose.Schema.Types.ObjectId, ref: "Activity" }],
});

module.exports = mongoose.model("User", userSchema);