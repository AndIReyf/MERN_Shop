const {Schema, model} = require('mongoose')

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    inStock: {
        type: Number,
        required: true
    },
    imgUrl: {
        type: String,
        required: true
    }
})

module.exports = model('product', productSchema)