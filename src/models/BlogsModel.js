const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId
const blogsmodel = new mongoose.Schema( {
    title: { 
        required:true,
        type:String
   },
    body: {
     type:String,
     required :true
    },
    authorId: {
        type:ObjectId,
        required:true,
        ref:"AuthorModel"
    },
    tags: { 
        type:[]
    },
    category: {
        type:[],
         required:true,
    },
    subcategory: {
        type:[],
    },
    isDeleted: { 
        type:Boolean,
         default: false 
        },
    isPublished: {
        type:Boolean,
         default: false }

}, { timestamps: true });   
   
module.exports = mongoose.model('BlogsModel', blogsmodel) 