const express=require('express');
const {getProduct,getAProduct,updateAProduct,deleteProduct,insertProduct}=require('../controllers/productControllers')

const router=express.Router();

//view all items
router.get('/',getProduct)

//view a single item
router.get('/:id',getAProduct)

//update an item
router.put('/:id',updateAProduct)

//delete an item
router.delete('/:id',deleteProduct)
//insert an item
router.post('/',insertProduct)

module.exports=router;