require('dotenv').config()
const express = require('express')
const cors = require('cors')
const connectDB = require('./config/db')
const productRoutes = require('./routes/products')

connectDB()

const app = express()
app.use(cors())
app.use(express.json())
app.use('/products', productRoutes)

const PORT = process.env.PORT | 8080

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
})