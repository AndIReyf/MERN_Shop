const Product = require('../models/Product')
const {handleError} = require('../utils/error')

const getProducts = async (req, res) => {
    try {
        const products = await Product.find()
        res.status(200).json(products)
    } catch (e) {
        handleError(res, 500, e, 'Server Error')
    }
}

const getProduct = async (req, res) => {
    try {
        const {id} = req.params
        const product = await Product.findById(id)
        res.status(200).json(product)
    } catch (e) {
        handleError(res, 500, e, 'Server Error')
    }
}

module.exports = {
    getProducts,
    getProduct
}