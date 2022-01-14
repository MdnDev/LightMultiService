import express from 'express'
const router = express.Router()
import { protect, admin } from '../middleware/authMiddleware.js'

import 
{   getAccessories,
    getAccessoryById,
    deleteAccessory,
    createAccessory,
    updateAccessory 
} from '../controllers/accessoryController.js'

router.route('/').get(getAccessories).post(protect, admin, createAccessory)
router.route('/:id').get(getAccessoryById)

router.route('/:id')
  .get(getAccessoryById)
  .delete(protect, admin, deleteAccessory)
  .put(protect, admin, updateAccessory)

export default router