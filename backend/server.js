const express = require('express')
const dotenv = require('dotenv')
const products = require('./data/products.js');
const clients = require('./data/clients.js')

dotenv.config()

const app = express()

app.get('/', (req, res) => {
    res.send('API is running')
})

app.get('/api/products', (req, res) => {
    res.json(products)
})

app.get('/api/products/:id', (req, res) => {
    const product = products.find(p => p._id === req.params.id)
    res.json(product)
})

app.get('/api/clients', (req, res) => {
    res.json(clients)
})

app.get('/api/config/mapsdk', (req, res) => res.send(process.env.MAP_SDK_KEY))

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))