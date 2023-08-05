require('dotenv').config();
const express=require('express');
const mongoose=require('mongoose');
const productRoutes =require ('./routes/productRoutes');

const PORT=process.env.PORT
const MONGO_URL=process.env.MONGO_URL

const app=express();

app.use(express.json())
app.use('/api/products',productRoutes)

mongoose.
connect(MONGO_URL)
.then(()=>{
   // res.send("Connection successful")
    console.log("Database connection successful")
    app.listen(PORT,()=>{
    console.log(`The API is running on port ${PORT}`)
})
}).catch((error)=>{
    console.log(error)
})