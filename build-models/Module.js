const mongoose = require("mongoose");

const moduleSchema = new mongoose.Schema({
    name: { type: String, required: true },
    moduleCode: { type: String, required: true, unique: true, index: true, dropDups: true },
    moduleId: { type: String, unique: true, index: true, dropDups: true },
    application: { type: mongoose.Schema.Types.ObjectId, ref: "Application" },
    type: {
        type: String,
        enum: ["BASE", "NORMAL"],
        default: "NORMAL",
        required: true
    }
}, { timestamps: true });

moduleSchema.pre("save", function (next) {
    this.code = this.code.toUpperCase();
    next();
});

moduleSchema.post("save", function (doc, next) {
    if (!this.moduleId) this.moduleId = this._id;
    this.save();
    next();
});

module.exports = mongoose.model("Module", moduleSchema);