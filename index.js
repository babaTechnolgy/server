const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send({hi:"khan"});  
});


const PORT = process.env.PORT || 5000 ;


