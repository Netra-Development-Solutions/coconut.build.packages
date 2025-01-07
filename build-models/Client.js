const mongoose = require("mongoose");
const constants = require("@coconut-packages/build-constants");

const clientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    clientCode: { type: String, required: true, unique: true, index: true, dropDups: true },
    clientId: { type: String, unique: true, index: true, dropDups: true },

    icon: { type: String, required: true },
    enabledEnvs: [{
        env: { type: String, required: true, enum: constants.env },
        modules: [{
            module: { type: mongoose.Schema.Types.ObjectId, ref: "Module" },
            application: { type: mongoose.Schema.Types.ObjectId, ref: "Application" }
        }]
    }],
}, { timestamps: true });

module.exports = mongoose.model("Client", clientSchema);