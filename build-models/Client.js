const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    clientCode: { type: String, required: true, unique: true, index: true, dropDups: true },
    clientId: { type: String, unique: true, index: true, dropDups: true },
    modules: [{ type: mongoose.Schema.Types.ObjectId, ref: "Module" }],
    icon: { type: String, required: true },
    }, { timestamps: true });

module.exports = mongoose.model("Client", clientSchema);