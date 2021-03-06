import express from "express";
import categories from "../data/categories.js";
const router = express.Router()

import { protect, admin } from '../middleware/authMiddleware.js'

import { getCategories, getCategoryById, deleteCategory,
    createCategory,
    updateCategory } from '../controllers/categoryController.js'

router.route('/').get(getCategories).post(protect, admin, createCategory)

router.route('/:id')
    .get(getCategoryById)
    .delete(protect, admin, deleteCategory)
    .put(protect, admin, updateCategory)

export default router