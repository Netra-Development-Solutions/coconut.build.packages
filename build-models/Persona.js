const mongoose = require("mongoose");

const personaSchema = new mongoose.Schema({
    name: { type: String, required: true },
    personaCode: { type: String, required: true, unique: true, index: true, dropDups: true },
    personaId: { type: String, unique: true, index: true, dropDups: true },
    attributes: [{ type: String }],
    icon: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model("Persona", personaSchema);