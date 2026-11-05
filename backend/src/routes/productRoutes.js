const express = require("express")
const { getProduct, createProduct, deleteProduct, updateProduct } = require("../controllers/productController")
const router = express.Router()

router.get("/products/:businessId", getProduct)
router.post("/products", createProduct)
router.put("/products/:id", updateProduct)
router.delete("/products/:id", deleteProduct)

module.exports = router