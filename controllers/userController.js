const  User =require('../models/userModel');
const asyncHandler = require('express-async-handler')

//insert
const insertUser=asyncHandler(async(req,res)=>{
    try {
        const user=await User.create(req.body);
        res.status(200).json(user)

    } catch (error) {
        res.status(500)
        throw new Error (error.message)
    }
})
module.exports={
    insertUser
}