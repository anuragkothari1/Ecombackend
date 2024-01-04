const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter Product Name"],
        trim: true
    },
    description: {
        type: String,
        required: [true, "Please Enter Product Description"],

    },
    price: {
        type: Number,
        required: [true, "Please Enter Price of Product"],
        maxLength: [6, "Price exceeds 6 digits"]
    },
    rating: {
        type: Number,
        default: 0
    },
    images: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true,
            }
        }
    ],
    category: {
        type: String,
        required: [true, "Please Enter Category of Product"],

    },
    stock: {
        type: Number,
        required: [true, "Please Enter Price of Product"],
        maxLength: [4, "stock can not exceed more than 4 characters"],
        default: 1
    },
    numOfReviews: {
        type: Number,
        default: 0
    },
    reviews: [
        {
            name: {
                type: String,
                required: true
            },
            rating: {
                type: Number,
                required: true
            },
            comment: {
                type: String,
                required: true

            }

        }
    ],
    craetedAt: {
        type: Date,
        default: Date.now

    }
})

module.exports = mongoose.model("Product", productSchema);