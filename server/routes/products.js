const router = require('express').Router()
const {getProduct, getProducts} = require('../controller/product')

//@desc GET all products from DB
//@route GET /products
//@access Public
router.get('/', getProducts)

//@desc GET a product by ID from DB
//@route GET /products/:id
//@access Public
router.get('/:id', getProduct)

module.exports = router