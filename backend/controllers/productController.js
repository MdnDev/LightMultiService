import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'


// @description    Fetch all products
// @route          GET /api/products
// @access         Public

const getProducts = asyncHandler(async (req, res) => {
  const name = req.query.name || '';
  const category = req.query.category || '';
  const nameFilter = name ? { name: { $regex: name, $options: 'i' } } : {};
  const categoryFilter = category ? { category } : {};
  const products = await Product.find({
    ...nameFilter,
    ...categoryFilter,
  })
  res.send(products)
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
      category: 'sample category',
      description: 'Sample description',
      accessoryName: '',
      accessoryImage: '',
      accessoryName2: '',
      accessoryImage2: '',
      accessoryName3: '',
      accessoryImage3: '',
      accessoryName4: '',
      accessoryImage4: '',
      accessoryName5: '',
      accessoryImage5: '',
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
      accessoryImage,
      accessoryName2,
      accessoryImage2,
      accessoryName3,
      accessoryImage3,
      accessoryName4,
      accessoryImage4,
      accessoryName5,
      accessoryImage5,
     
      
    } = req.body
  
    const product = await Product.findById(req.params.id)
  
    if (product) {
      product.name = name
      product.description = description
      product.image = image
      product.brand = brand
      product.category = category
      product.accessoryName = accessoryName
      product.accessoryImage = accessoryImage
      product.accessoryName2 = accessoryName2
      product.accessoryImage2 = accessoryImage2
      product.accessoryName3 = accessoryName3
      product.accessoryImage3 = accessoryImage3
      product.accessoryName4 = accessoryName4
      product.accessoryImage4 = accessoryImage4
      product.accessoryName5 = accessoryName5
      product.accessoryImage5 = accessoryImage5
      
  
      const updatedProduct = await product.save()
      res.json(updatedProduct)
    } else {
      res.status(404)
      throw new Error('Product not found')
    }
  })

  const getCategories  = asyncHandler(async (req, res) => {
    const categories = await Product.find().distinct('category')
    res.send(categories)
  })

  const getRandomProducts  = asyncHandler(async (req, res) => {
    const products = await Product.find({}).limit(4)
    
    res.send(products)
  })

  
export {
    getProducts,
    getProductById,
    deleteProduct,
    createProduct,
    updateProduct,
    getCategories,
    getRandomProducts
    
}