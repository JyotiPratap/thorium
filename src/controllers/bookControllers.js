const BookModel= require("../models/bookModel")

const createBook = async function (req, res) {
    let data = req.body
    let savedData = await BookModel.create(data)
    res.send({msg: savedData})
} 
 
const bookList = async function (req, res) {
    let allBooks= await BookModel.find({ }).select( { bookName: 1, authorName: 1})
    res.send({msg: allBooks})
}

const getBooksInYear = async function(req, res){
    let bookYearData = req.body.year
    let bookYear = await BookModel.find({year : bookYearData});
    res.send({ "Book Data according to the year" : bookYear});
}
const getParticularBooks = async function(req, res) {
    let data = req.query.any 
    console.log(typeof (data))
    let saveData = await BookModel.find({ $or : [{bookName : data}, {year: data}, {authorName : data}, {totalPages : data}, {stockAvailable : data}] })
    res.send({msg : saveData})
}

// const getXINRBooks = async function(req,res){
//     let albooks = await BookModel.find()
//     res.send({msg:albooks})
// }

const getRandomBooks = async function(req,res){
    let data =await BookModel.find({stockAvailable: true,totalPages:{$gte:500}})
    res.send({msg:data})
}

module.exports.createBook= createBook
module.exports.bookList= bookList
module.exports.getBooksInYear= getBooksInYear
module.exports.getParticularBooks= getParticularBooks
// module.exports.getXINRBooks=getXINRBooks
module.exports.getRandomBooks=getRandomBooks