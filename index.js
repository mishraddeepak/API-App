const express = require('express')
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser')
const db=require("./config/mongoose")


const app = express()

//middlewares
app.use(bodyParser.json())
app.use('/api/product',require('./src/features/products/routees/routes/product.routes'))


app.listen(port,(err)=>{
    if(err){
        console.log("error in getting connection")
    }
    console.log("server started successfully",port)
})


