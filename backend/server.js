import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import colors from 'colors'
import products from './data/products.js'
import clients from './data/clients.js'
import categories from './data/categories.js';

dotenv.config()

connectDB()

const app = express()

app.get('/', (req, res) => {
    res.send('API is running')
})

app.get('/api/products', (req, res) => {
    res.json(products)
})

app.get('/api/products/:id', (req, res) => {
    const product = products.find((p) => p._id === req.params.id)
    res.json(product)
})

app.get('/api/clients', (req, res) => {
    res.json(clients)
})

app.get('/api/categories', (req, res) => {
    res.json(categories)
})

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))