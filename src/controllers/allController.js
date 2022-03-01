const authorModel= require("../models/authorsModel");
const bookModel = require("../models/bookModel");

const createNewAuthor = async function(req,res){
    const reqAuthor = req.body;
    const SaveData= await authorModel.create(reqAuthor);
    res.send({msg: SaveData})
}
 const createNewBook = async function(req,res){
    const reqBook = req.body;
    const Saved = await bookModel.create(reqBook)
    res.send({msg:Saved})
 }

 const allBooks = async function(req,res){
     const authorDetails = await authorModel.find({author_Name:"chetan Bhagat"})
     const id = authorDetails[0].author_id
     const booksName = await bookModel.find({author_id:id}).select({name:1})
     res.send({msg:booksName})
 }

 const UpdatedBookPrice = async function(req,res){
     const bookDetails = await bookModel.find({bookname:"Two states"})
     const id = bookDetails[0].author_id
     const authorN = await authorModel.find({author_id:id}).select({author_name:1,id:0})

     const bkname = bookDetails[0].bookname
     const updatePrice = await bookModel.findOneAndUpdate({bookname:bkname} ,{price:100},{new:true}).select({price:1,id:0})
     res.send({msg:authorN, updatePrice})
}

 const authorsName = async function(req,res){
    const booksId = await bookModel.find({price: {$gte:50,$lte:100}}).select({author_id:1 , id:0})
    const id = booksId.map(inp =>inp.author_id)
    const allAuthorsName = id.map(x=>{
        return authorModel.find({author_id:x}).select({author_name:1,id:0})
    })
    res.send({msg:allAuthorsName})
}

module.exports.createNewAuthor = createNewAuthor
module.exports.createNewBook = createNewBook
module.exports.allBooks = allBooks
module.exports.UpdatedBookPrice=UpdatedBookPrice
module.exports.authorsName=authorsName
