const  Product =require('../models/productsModel');

//view one
const getAProduct=async(req,res)=>{
    try {
        const {id}=req.params;
        const product=await Product.findById(id);
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
//view all
const getProduct=async(req,res)=>{
    try {
        const products=await Product.find({});
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
//update
const updateAProduct=async(req,res)=>{
    try {
        const {id}=req.params;
        const product=await Product.findByIdAndUpdate(id,req.body);
        if(!product){
            return res.status(404).json({message:`could not find a product with id ${id}`})
        }
        const updatedProduct=await Product.findById(id)
        res.status(200).json(updatedProduct)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
//delete
const deleteProduct=async(req,res)=>{
    try {
        const {id}=req.params;
        const product=await Product.findByIdAndDelete(id,req.body);
        if(!product){
            return res.status(404).json({message:`could not find a product with id ${id}`})
        }
        res.status(200).json({message:`product with id ${id} deleted`})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
//insert
const insertProduct=async(req,res)=>{
    try {
        const product=await Product.create(req.body);
        res.status(200).json(product)

    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
module.exports={
    getProduct,
    getAProduct,
    updateAProduct,
    deleteProduct,
    insertProduct
}