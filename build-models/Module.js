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

module.exports = mongoose.model("Module", moduleSchema);