const express = require("express")
const { getBusiness, createBusiness, deleteBusiness, updateBusiness } = require("../controllers/businessController")
const router = express.Router()

router.get("/business", getBusiness)
router.post("/business", createBusiness)
router.put("/business:id", updateBusiness)
router.delete("/business:id", deleteBusiness)

module.exports = router