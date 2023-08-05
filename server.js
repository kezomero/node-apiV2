import express from 'express';

const express=require('express');
const mongoose=require('mongoose');

const app=express();

//routes
app.get('/',(req,res)=>{
    res.send('Hello...')
})
app.get('/view',(req,res)=>{
    res.send('Hello views...')
})

app.listen(3000,()=>{
    console.log("The API is running on port 3000")
})

/*mongoose.
connect('mongodb+srv://dimatata01:Dki.38690862@cluster0.vhjqqgo.mongodb.net/Node-API?retryWrites=true&w=majority')
.then(()=>{
   // res.send("Connection successful")
    console.log("Connection successful")
}).catch((error)=>{
    console.log(error)
})*/