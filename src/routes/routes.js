const express = require('express');
const router = express.Router();
const controller= require("../controllers/controllers")
const middleware= require("../Middleware/middleware")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", controller.createAuthor)
router.post("/createBlog",middleware.authorization ,controller.createBlog)
router.get("/getblogs",middleware.authorization, controller.getblog)
router.post("/login",controller.loginUser)
router.delete("/deleteBlogs/:blogId",middleware.authorization,controller.deleteBlogs)
router.put("/blogs/:blogId",middleware.authorization,controller.updateBlog)
router.delete("/blogs",middleware.authorization,controller.deleteByQuery)
module.exports = router;