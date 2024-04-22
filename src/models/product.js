const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true,
    },
    discountPrice:{
        type: Number
    },
    rating:{
        type:Number,
        required: true
    },
    imagePath:{
        type: String,
        required: true,
    }
})

const Product = mongoose.model("popularProduct", productSchema)

module.exports =  {Product}