// const { count } = require("console")
// const product = require("../models/productModel")

// const createProduct= async function (req, res){
//     let data= req.body
//     let savedData= await product.create(data)
//     res.send({msg: savedData})
// }
// module.exports.createProduct= createProduct

const ProductModel= require("../models/productModel")

const createProduct= async function (req, res) {
    let data = req.body
    let savedData= await ProductModel.create(data)
    res.send({msg: savedData})
}

module.exports.createProduct= createProduct