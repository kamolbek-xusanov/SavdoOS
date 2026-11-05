const express = require("express")
const app = express()
const productRoutes = require("./routes/productRoutes")
const businessRoutes = require("./routes/businessRoutes")

app.use(express.json())


app.get("/api/health", (req, res) => {
    res.json({status : "ok", service: "SavdoOS API"})
})

app.use("/api", productRoutes, businessRoutes)



module.exports = app