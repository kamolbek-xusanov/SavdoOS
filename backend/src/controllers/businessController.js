const Business = require('../models/Business')

exports.getBusiness = async (req, res) => {
    try {
        const businesses = await Business.find()
        if (businesses.length === 0) {
            return res.status(200).json({
                message: "Malumot topilmadi"
            })
        }
        res.status(200).json({
            data: businesses
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

exports.createBusiness = async (req, res) => {
    try {
        const business = await Business.create(req.body)
        
        if (!business) {
            return res.status(200).json({
                message: "Malumot topilmadi"
            })
        }
        res.status(201).json({
            message: "Add succesfull",
            data: business
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

exports.updateBusiness = async (req, res) => {
    try {
        const business = await Business.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (!business) {
            return res.status(404).json({
                message: "Malumot topilmadi"
            })
        }

        res.status(200).json({
            message: "Malumot yangilandi",
            data: business
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

exports.deleteBusiness = async (req, res) => {
    try {
        const business = await Business.findByIdAndDelete(req.params.id)
        if (!business) {
            return res.status(404).json({
                message: "Malumot topilmadi"
            })
        }

        res.status(200).json({
            message: "Malumot o'chirildi"
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}