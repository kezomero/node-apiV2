require('dotenv').config();
const express=require('express');
const mongoose=require('mongoose');
const productRoutes =require ('./routes/productRoutes');
const errorMiddleware=require('./middleware/errorMiddleware')
const cors = require('cors')

const PORT=process.env.PORT
const MONGO_URL=process.env.MONGO_URL
const FRONTEND=process.env.FRONTEND

const app=express();

var corsOptions = {
  origin: FRONTEND,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

//app.use(cors(corsOptions))
app.use(express.json())
app.use('/api/products',productRoutes)

app.get('/',(req,res)=>{
    throw new Error (`Fake error`)
    //res.send(`hello matata!`)
})

app.use(errorMiddleware)

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