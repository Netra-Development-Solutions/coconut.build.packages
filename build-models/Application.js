// models/Application.js
const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  appCode: { type: String, required: true, unique: true, index: true, dropDups: true },
  appId: { type: String, unique: true, index: true, dropDups: true },
  modules: [{ type: mongoose.Schema.Types.ObjectId, ref: "Module" }],
  icon: { type: String, required: true },
}, { timestamps: true });

applicationSchema.pre("save", function (next) {
  this.code = this.code.toUpperCase();
  next();
});

applicationSchema.post("save", function (doc, next) {
  if (!this.appId) this.appId = this._id;
  this.save();
  next();
});

module.exports = mongoose.model("Application", applicationSchema);