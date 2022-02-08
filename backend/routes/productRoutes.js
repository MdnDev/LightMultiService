import express from 'express'
const router = express.Router()
import { protect, admin } from '../middleware/authMiddleware.js'


import { getProducts, getProductById, deleteProduct,
    createProduct,
    updateProduct, queryProduct } from '../controllers/productController.js'


router.route('/').get(getProducts, queryProduct).post(protect, admin, createProduct)

router.route('/:id')
  .get(getProductById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct)

export default router