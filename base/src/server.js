const express = require("express")
require('dotenv').config();
const mongoose = require("mongoose")
const Product = require('./models/productModel')


const app = express()



app.use(express.json())
var port = 3000
app.get('/', function (req, res) {
    res.send("Hello World")
})
app.get('/blog', (req, res) => {
    res.send("The blog page")
})

app.get('/getAllProducts', async(req, res)=>{
    try{
        const products = await Product.find({})
        res.status(200).json(products)
    }catch(error){
        res.status(500).json({message: error.message})
    }
})

app.get('/producthunt', async(req, res)=>{
    try{
        const {id} = req.params.id;
        const product = await Product.findOne({id : id});
        res.status(200).json(product)
    }catch(error){
        res.status(500).json({message: error.message})
    }
})

app.post('/productpost', async (req, res)=>{
    // console.log(req.body)
    // res.send(req.body)
    //now We want to save the posted data to mongo

    try{
        const product0 = await Product.create(req.body)
        res.status(200).json(product0)
    }catch(error){
        console.log(error.message);
        res.status(500).json({message:error.message})
    }
})

const link = process.env.mongoose_link //not working, why?
mongoose.connect(link).then(() => {
    console.log("Connected to mongoDB")
    app.listen(port, () => {
        console.log(`Node app running on port ` + port);
    })
}).catch((error) => {
    console.log(error)
})