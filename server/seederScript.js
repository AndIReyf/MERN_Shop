require('dotenv').config()
const connectDB = require('./config/db')
const Product = require('./models/Product')
const productsData = require('./data/products')

connectDB()

const impData = async () => {
    try {
        await Product.deleteMany()
        await Product.insertMany(productsData)

        console.log('Import Data Success')
        process.exit()
    } catch (e) {
        console.log(e)
        process.exit(1)
    }
}

impData()