import express from 'express';
import path from 'path'
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import colors from 'colors'
import products from './data/products.js'
import clients from './data/clients.js'
import categories from './data/categories.js';
import productRoutes from './routes/productRoutes.js'
import accessoryRoutes from './routes/accessoryRoutes.js'
import categoryRoutes from './routes/categoryRoutes.js'
import userRoutes from './routes/userRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'
import uploadAccessoryRoutes from './routes/uploadAccessoryRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

dotenv.config()

connectDB()

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('API is running')
})

app.get('/api/clients', (req, res) => {
    res.json(clients)
})

app.use('/api/products', productRoutes)
app.use('/api/accessories', accessoryRoutes)
app.use('/api/categories', categoryRoutes)
app.use('/api/users', userRoutes)
app.use('/api/upload', uploadRoutes)
app.use('/api/uploadAccessories', uploadAccessoryRoutes)

const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

const __dirname2 = path.resolve()
app.use('/uploadsAccessories', express.static(path.join(__dirname2, '/uploadsAccessories')))


app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))