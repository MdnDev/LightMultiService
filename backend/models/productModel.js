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

        accessories: {
            firstAccessory: {
                name: {
                    type: String,
                    required: false
                },
        
                image: {
                    type: String,
                    required: false,
                    
                },
        
                category: {
                    type: String,
                    required: false
                },
        
                description: {
                    type: String,
                    required: false,
                },
        
                countInStock: {
                    type: Number,
                    required: false,
                    default: 0
                },
            },

            secondAccessory: {
                name: {
                    type: String,
                    required: false
                },
        
                image: {
                    type: String,
                    required: false,
                    
                },
        
                category: {
                    type: String,
                    required: false
                },
        
                description: {
                    type: String,
                    required: false,
                },
        
                countInStock: {
                    type: Number,
                    required: false,
                    default: 0
                },
            },

            thirdAccessory: {
                name: {
                    type: String,
                    required: false
                },
        
                image: {
                    type: String,
                    required: false,
                    
                },
        
                category: {
                    type: String,
                    required: false
                },
        
                description: {
                    type: String,
                    required: false,
                },
        
                countInStock: {
                    type: Number,
                    required: false,
                    default: 0
                },
            },

            fourthAccessory: {
                name: {
                    type: String,
                    required: false
                },
        
                image: {
                    type: String,
                    required: false,
                    
                },
        
                category: {
                    type: String,
                    required: false
                },
        
                description: {
                    type: String,
                    required: false,
                },
        
                countInStock: {
                    type: Number,
                    required: false,
                    default: 0
                },
            },

            fifthAccessory: {
                name: {
                    type: String,
                    required: false
                },
        
                image: {
                    type: String,
                    required: false,
                    
                },
        
                category: {
                    type: String,
                    required: false
                },
        
                description: {
                    type: String,
                    required: false,
                },
        
                countInStock: {
                    type: Number,
                    required: false,
                    default: 0
                },
            },
            
        }

        
    },
    {
        timestamps: true,
    }
)

const Product = mongoose.model('Product', productSchema);

export default Product;