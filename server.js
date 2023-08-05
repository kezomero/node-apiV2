import express from 'express';

const app=express();

//routes
app.get('/',(req,res)=>{
    res.send('Hello...')
})

app.listen(3000,()=>{
    console.log("The API is running on port 3000")
})