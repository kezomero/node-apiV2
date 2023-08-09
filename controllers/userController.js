const  User =require('../models/userModel');
const asyncHandler = require('express-async-handler')

//insert
const insertUser=asyncHandler(async(req,res)=>{
    try {
        //validation start
        const { email } = req.body; // Destructuring to get the email from the body
        const isNew=await User.isEmailInUse(email)
        if(!isNew) res.status(200).json({success:false,message:'Email in use'})
        //validation end
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