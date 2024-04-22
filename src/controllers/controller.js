
const expressHandler = require('express-async-handler')
const Product = require('../models/product.js')

const postProduct = expressHandler(async(req,res)=>{
    try{
        if(!req.file){
            return res.status(500).json({error: 'No file found'})
        }
        const productFile = Product({
            title: req.query.title,
            price: req.query.price,
            discountPrice: req.query.discountPrice,
            rating: req.query.rating,
            imagePath: req.file.path,
        })
        const savedProduct = await productFile.save()
        res.status(200).json(savedProduct)
    }catch(error){
        console.log(error)
    }
})

module.export = { postProduct };