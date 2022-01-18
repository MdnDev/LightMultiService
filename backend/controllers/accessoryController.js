import asyncHandler from 'express-async-handler'
import Accessory from '../models/accessoryModel.js'



// @description    Fetch all accessories
// @route          GET /api/accessory
// @access         Public

const getAccessories = asyncHandler(async (req, res) => {
    const accessories = await Accessory.find({})

    res.json(accessories)
})

// @description    Fetch single accessory
// @route          GET /api/accessory/:id
// @access         Public

const getAccessoryById = asyncHandler(async (req, res) => {
    const accessory = await Accessory.findById(req.params.id)
    if(accessory) {
        res.json(accessory)
    } else {
        res.status(404)
        throw new Error('Accessoire non trouvé')
    }
})

// @desc    Delete an accessory
// @route   DELETE /api/accessories/:id
// @access  Private/Admin
const deleteAccessory = asyncHandler(async (req, res) => {
    const accessory = await Accessory.findById(req.params.id)
  
    if (accessory) {
      await accessory.remove()
      res.json({ message: 'Accessoire retiré' })
    } else {
      res.status(404)
      throw new Error('Accessoire non trouvé')
    }
  })
  
  // @desc    Create an accessory
  // @route   POST /api/accessories
  // @access  Private/Admin
  const createAccessory = asyncHandler(async (req, res) => {
   
    const accessory = new Accessory({
      name: 'Accessoire Prototype',
      user: req.user._id,
      product: req.product._id,
      image: '/images/accessoireprototype.jpg',
      brand: ' accessoire marque prototype',
      category: 'catégorie accessoire prototype',
      description: ' description accessoire prototype',
      })
      
    
    const createdAccessory = await accessory.save()
    res.status(201).json(createdAccessory)

  })
  
  // @desc    Update a accessory
  // @route   PUT /api/accessories/:id
  // @access  Private/Admin
  const updateAccessory = asyncHandler(async (req, res) => {
    const {
      name,
      description,
      image,
      brand,
      category,
    } = req.body
  
    const accessory = await Accessory.findById(req.params.id)
  
    if (accessory) {
      accessory.name = name
      accessory.description = description
      accessory.image = image
      accessory.brand = brand
      accessory.category = category
      
  
      const updatedAccessory = await accessory.save()
      res.json(updatedAccessory)
    } else {
      res.status(404)
      throw new Error('Accessory not found')
    }
  })

  // @desc    Find an accessory related to a product
  // @route   GET
  // @access  Public

  //Accessory.
  //findOne({ name: 'prototype' }).
  //populate('product').
  //exec(function (err, accessory) {
    //if (err) return handleError(err);
    //console.log('Cet accessoire est lié à', accessory.product.name);
    // prints "The author is Ian Fleming"
  //});


export {
    getAccessories,
    getAccessoryById,
    deleteAccessory,
    createAccessory,
    updateAccessory,
}