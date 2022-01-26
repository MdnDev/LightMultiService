import mongoose from "mongoose";

const accessorySchema = mongoose.Schema(
    {
        name: String,
        image: String,
    },
    {
        timestamps: true,
    }

)

const productSchema = mongoose.Schema({
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },

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

       accessories: [accessorySchema]
    
    },
    {
        timestamps: true,
    }
)



const Product = mongoose.model('Product', productSchema);


export default Product;