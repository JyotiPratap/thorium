let axios = require("axios");
const AuthorModel = require("../models/AuthorModel.js");
const blogsmodel = require("../models/BlogsModel.js")
let validator =require("email-validator");



const createAuthor = async function (req, res) {
    try{
       let data = req.body;
       if(Object.keys(data).length != 0){
       let savedData = await AuthorModel.create(data);
       res.status(200).send({ status:true,msg: savedData });
     }
     else res.status(400).send({msg:"bad request"})
    }
    catch(err){
       console.log("this is the error:",err.message)
        res.status(500).send({msg:"Error",error:err.message})
     }
  };

  const createBlog = async function (req, res) {
    try{
               let blog = req.body
               let authorId = req.body.authorId
               let author = await AuthorModel.findById(authorId)
               if(!author)
               {
                  res.status(400).send({status : false, msg:"No Such Author is Present,Please check authorId"})
               }
               let blogCreated = await blogsmodel.create(blog)
               res.status(201).send({status:true,data: blogCreated})
         }
     catch(error)
          {
                console.log(error)
                res.status(500).send({status : false, msg : error.message})
          }  
 };



 const getblog = async function (req, res) {
    try {
        let allblogs = await blogsmodel.find({isDeleted:true,isPublished:true})
        if (allblogs.length === 0){
        return res.status(404).send({ status: false, msg: "No such blog exists" });
        }
        else{
        res.status(201).send({ status:true,data: allblogs });
        }
    }
    catch (err) {
        console.log("this is the error:", err.message)
        res.status(500).send({ msg: "Error", error: err.message })
    }
};



const updateBlog = async function (request, response) {
    try {
         const id = request.params.blogId;
         const data = request.body;
         const fetchData = await blogsmodel.findById(id);
         if (fetchData.isDeleted) {
             return response.status(404).send({
                 'status': false,
                 'Error: ': 'Blog Not Found !'
             });
         }
         data.publishedAt = new Date();
         data.isPublished = true
         const dataRes = await blogsmodel.findByIdAndUpdate(request.params.blogId, data, {
             new: true
         });
         return response.status(200).send({
             'status': true,
             'meg': dataRes
         });
     } catch (error) {
         return response.status(500).send({
             'Error: ': error.message
         });
     }
}



const deleteBlogs = async function (req, res) {
    try {
         let blogId = req.params.blogId;
         let blogInfo = await blogsmodel.findById(blogId);
         console.log(blogInfo)
         if (!blogInfo)
              return res.status(404).send({ status: false, msg: "No such blog exists" });
         let deleteBlogs = await blogsmodel.findOneAndUpdate({ _id: blogId }, { $set: { isDeleted: true } }, { new: true });
         res.status(201).send({ status: true});
}
    catch (error) {
         console.log(error)
         res.status(500).send({ status: true, msg: error.message })
    }
};
   

module.exports.createAuthor=createAuthor
module.exports.createBlog=createBlog
module.exports.getblog=getblog
module.exports.updateBlog=updateBlog
module.exports.deleteBlogs=deleteBlogs