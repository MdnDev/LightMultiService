import mongoose from 'mongoose'

const AccessorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    image: {
        type: String,
        required: true,
        
    },

    category: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true,
    },

    countInStock: {
        type: Number,
        required: true,
        default: 0
    },

}, 
{
    timestamps: true,
})

const Accessory = mongoose.model('Accessory', AccessorySchema);

export default Accessory;