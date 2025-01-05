// models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  groups: [{ type: String }],
  activities: [{ type: mongoose.Schema.Types.ObjectId, ref: "Activity" }],
  persona: { type: mongoose.Schema.Types.ObjectId, ref: "Persona" },
  sub: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  picture: { type: String },
  name: { type: String },
  given_name: { type: String },
  family_name: { type: String },
  email_verified: { type: Boolean, required: true, default: false }
});

module.exports = mongoose.model("User", userSchema);