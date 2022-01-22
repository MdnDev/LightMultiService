import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

// @description    Fetch all products
// @route          GET /api/products
// @access         Public

const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({})

    res.json(products)
})

// @description    Fetch single product
// @route          GET /api/product/:id
// @access         Public

const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if(product) {
        res.json(product)
    } else {
        res.status(404)
        throw new Error('Article non trouvé')
    }
})

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private/Admin
const deleteProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
  
    if (product) {
      await product.remove()
      res.json({ message: 'Article retiré' })
    } else {
      res.status(404)
      throw new Error('Article non trouvé')
    }
  })
  
  // @desc    Create a product
  // @route   POST /api/products
  // @access  Private/Admin
  const createProduct = asyncHandler(async (req, res) => {
    const product = new Product({
      name: 'Sample name',
      user: req.user._id,
      image: '/images/sample.jpg',
      category: 'Sample Category',
      description: 'Sample description',
      accessories: [
        {
          name: 'Sample Accessory Name',
          image: '/images/sample.jpg'
        }
      ]
    })
  
    const createdProduct = await product.save()
    res.status(201).json(createdProduct)
  })
  
  // @desc    Update a product
  // @route   PUT /api/products/:id
  // @access  Private/Admin
  const updateProduct = asyncHandler(async (req, res) => {
    const {
      name,
      description,
      image,
      brand,
      category,
      accessoryName,
      accessoryImage
     
      
    } = req.body
  
    const product = await Product.findById(req.params.id)
  
    if (product) {
      product.name = name
      product.description = description
      product.image = image
      product.brand = brand
      product.category = category
      product.accessories.name = accessoryName
      product.accessories.image = accessoryImage
      
  
      const updatedProduct = await product.save()
      res.json(updatedProduct)
    } else {
      res.status(404)
      throw new Error('Product not found')
    }
  })

export {
    getProducts,
    getProductById,
    deleteProduct,
    createProduct,
    updateProduct,
}