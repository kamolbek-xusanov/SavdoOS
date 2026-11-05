const dns = require("dns")
dns.setServers(["8.8.8.8", "8.8.4.4"])
const mongoose = require("mongoose")
require("dotenv").config()

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Server ishga tushdi")
    } catch (error) {
        console.log("Serverda muammo bor", error.message)
        process.exit(1)
    }
}

module.exports = connectDB