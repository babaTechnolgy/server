const express = require('express');
// import  express from "express";
const app = express();

app.get('/',(req,res)=>{
    res.send({hi:"khan"});  
});


// const PORT = process.env.PORT || 5000 ;
app.listen(5000);
