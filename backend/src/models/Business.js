const mongoose = require("mongoose")

const businessSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    address: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Business", businessSchema)