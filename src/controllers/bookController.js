const { count } = require("console")
const authorModel = require("../models/newAuthor")
const bookModel= require("../models/newBook")
const publisherModel = require("../models/newPublisher")

const createBook= async function (req, res) {
    let book = req.body
    let authorId = book.author
    let publisherId = book.publisher

   
    if(!authorId) 
    return res.send('The request is not valid as the author details are required.')

    
    let author = await authorModel.findById(authorId)
    if(!author)
     return res.send('The request is not valid as no author is present with the given author id')

    
    if(!publisherId)
     return res.send('The request is not valid as the publisher details are required.') 

    
    let publisher = await publisherModel.findById(publisherId)
    if(!publisher) 
    return res.send('The request is not valid as no publisher is present with the given publisher id')

    let bookCreated = await bookModel.create(book)
    return res.send({data: bookCreated})
}

const getBooks= async function (req, res) {
    let book = await bookModel.find().populate("authorSchema").populate("publisherSchema")
    res.send({data: book})
}

const books = async function(req,res){
    let update = await bookModel.updateMany(
    {$or :[{publisher:"6220704ced24b530d4436b2f"},{ publisher:"6220f9aacb37d3c661a0f128"}]},
    {$set:{isHardCover:true}},
     {new :true}
    )
    res.send({msg:update})
    }

const changeBookPrice =async function(req,res){
let books= await authorModel.find({ratings: {$gt:3.5}}).select({_id:1})
let changePrice = await bookModel.updateMany(
    {author:{$in:books}},
    {$inc :{price:10}})
  res.send({msg:changePrice})
}


module.exports.createBook= createBook
module.exports.getBooks= getBooks
module.exports.books= books
module.exports.changeBookPrice= changeBookPrice