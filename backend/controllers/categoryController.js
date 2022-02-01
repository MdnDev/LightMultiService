import asyncHandler from 'express-async-handler'
import Category from '../models/categoryModel.js'


// @description    Fetch all categories
// @route          GET /api/categories
// @access         Public

const getCategories = asyncHandler(async (req, res) => {
    const categories = await Category.find({})

    res.json(categories)
})

// @description    Fetch single category
// @route          GET /api/category/:id
// @access         Public

const getCategoryById = asyncHandler(async (req, res) => {
    const category = await Category.findById(req.params.id)
    if(category) {
        res.json(category)
    } else {
        res.status(404)
        throw new Error('Catégorie non trouvée.')
    }
})

// @desc    Delete a category
// @route   DELETE /api/categories/:id
// @access  Private/Admin
const deleteCategory = asyncHandler(async (req, res) => {
    const category = await Category.findById(req.params.id)
  
    if (category) {
      await category.remove()
      res.json({ message: 'Catégorie retirée' })
    } else {
      res.status(404)
      throw new Error('Catégorie non trouvée')
    }
  })
  
  // @desc    Create a category
  // @route   POST /api/categories
  // @access  Private/Admin
  const createCategory = asyncHandler(async (req, res) => {
    const category = new Category({
      name: 'catégorie type',
      subCategory: 'sous-catégorie type',
    })
  
    const createdCategory = await category.save()
    res.status(201).json(createdCategory)
  })
  
  // @desc    Update a category
  // @route   PUT /api/categories/:id
  // @access  Private/Admin
  const updateCategory = asyncHandler(async (req, res) => {
    const {
      name,
      subCategory,
    } = req.body
  
    const category = await Category.findById(req.params.id)
  
    if (category) {
      category.name = name
      category.subCategory = subCategory
      
      const updatedCategory = await category.save()
      res.json(updatedCategory)
    } else {
      res.status(404)
      throw new Error('Catégorie non trouvée')
    }
  })

export {
    getCategories,
    getCategoryById,
    deleteCategory,
    createCategory,
    updateCategory,
}