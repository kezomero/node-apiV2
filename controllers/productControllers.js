const  Product =require('../models/productsModel');
const asyncHandler = require('express-async-handler')

//view one
const getAProduct=asyncHandler(async(req,res)=>{
    try {
        const {id}=req.params;
        const product=await Product.findById(id);
        res.status(200).json(product)
    } catch (error) {
        res.status(500)
        throw new Error (error.message)
    }
})
//view all
const getProduct=asyncHandler(async(req,res)=>{
    try {
        const products=await Product.find({});
        res.status(200).json(products)
    } catch (error) {
        res.status(500)
        throw new Error (error.message)
    }
})
//update
const updateAProduct=asyncHandler(async(req,res)=>{
    try {
        const {id}=req.params;
        const product=await Product.findByIdAndUpdate(id,req.body);
        if(!product){
            res.status(404)
            throw new Error (`could not find a product with id ${id}`)
        }
        const updatedProduct=await Product.findById(id)
        res.status(200).json(updatedProduct)
    } catch (error) {
        res.status(500)
        throw new Error (error.message)
    }
})
//delete
const deleteProduct=asyncHandler(async(req,res)=>{
    try {
        const {id}=req.params;
        const product=await Product.findByIdAndDelete(id,req.body);
        if(!product){
            res.status(404)
            throw new Error (`could not find a product with id ${id}`)
        }
        res.status(200).json({message:`product with id ${id} deleted`})
    } catch (error) {
        res.status(500)
        throw new Error (error.message)
    }
})
//insert
const insertProduct=asyncHandler(async(req,res)=>{
    try {
        const product=await Product.create(req.body);
        res.status(200).json(product)

    } catch (error) {
        res.status(500)
        throw new Error (error.message)
    }
})
module.exports={
    getProduct,
    getAProduct,
    updateAProduct,
    deleteProduct,
    insertProduct
}