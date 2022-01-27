import mongoose from "mongoose";



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

       accessoryName: {
           type: String,
           required: false,
       },

       accessoryImage: {
        type: String,
        required: false,
        },

        accessoryName2: {
            type: String,
            required: false,
        },

        accessoryImage2: {
        type: String,
        required: false,
        },

        accessoryName3: {
            type: String,
            required: false,
        },

        accessoryImage3: {
        type: String,
        required: false,
        },

        accessoryName4: {
            type: String,
            required: false,
        },

        accessoryImage4: {
        type: String,
        required: false,
        },
        accessoryName5: {
            type: String,
            required: false,
        },

        accessoryImage5: {
        type: String,
        required: false,
        },
    
    },
    {
        timestamps: true,
    }
)



const Product = mongoose.model('Product', productSchema);


export default Product;