const express=require('express');
const {insertUser}=require('../controllers/userController')

const router=express.Router();

router.post('/',insertUser)

module.exports=router;