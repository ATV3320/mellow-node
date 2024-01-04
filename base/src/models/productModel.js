const mongoose = require("mongoose")

const productSchema = mongoose.Schema(
    {
        name:{
            type: String,
            required: [true, "Name is necessary"]
        },
        quantity:{
            type: Number,
            required: [true, "Number is necessary for functioning, otherwise default will be used"],
            default: 5
        },
        price: {
            type: Number,
            required: true,
        },
        image: {
            type: String,
            required: false,
        }
    },
    {
        timestamps: true
    }
)

const Product = mongoose.model('Product', productSchema)
module.exports = Product