const Product = require("../models/Product")
const Business = require("../models/Business")

exports.getProduct = async (req, res) => {
    try {
        const products = await Product.find({business: req.params.businessId}).populate("business", "name address")

        if (products.length === 0) {
            return res.status(200).json({
                message: "Product topilmadi"
            })
        }
        res.status(200).json({
            message: "Mahsulot olindi",
            data: products
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

exports.createProduct = async (req, res) => {
    try {
        const business = await Business.findById(req.body.business)

        if(!business) {
            return res.status(404).json({
                message: "Business topilmadi"
            })
        }

        const product = await Product.create(req.body)

        res.status(201).json({
            message: "Mahsulot yaratildi",
            data: product
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}


exports.updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        if (!product) {
            return res.status(404).json({
                message: "Mahsulot topilmadi"
            })
        }
        res.status(200).json({
            message: "Mahsulot yangilandi",
            data: product
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

exports.deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id)
        if (!product) {
            return res.status(404).json({
                message: "Mahsulot topilmadi"
            })
        }
        res.status(200).json({
            message: "Mahsulot o'chirildi"
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}