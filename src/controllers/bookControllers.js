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
    console.log('Data sent successfully');
    res.send({ "Book Data according to the year" : bookYear});
}

// const getXINRBooks = async function(req,res){
//     let albooks = await BookModel.find()
//     res.send({msg:albooks})
// }


module.exports.createBook= createBook
module.exports.bookList= bookList
module.exports.getBooksInYear= getBooksInYear
// module.exports.getXINRBooks=getXINRBooks