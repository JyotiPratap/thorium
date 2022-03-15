const express = require('express');
const router = express.Router();
const controller= require("../controllers/controllers")
const middleware= require("../Middleware/middleware")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", controller.createAuthor)
router.post("/createBlog",middleware.authentication ,controller.createBlog)
router.get("/getblogs",middleware.authentication, controller.getblog)

router.put("/blogs/:blogId",middleware.authentication,middleware.authorization,controller.updateBlog)
router.delete("/deleteBlogs/:blogId",middleware.authentication,middleware.authorization,controller.deleteBlogs)
router.delete("/blogs",middleware.authentication,middleware.authorization,controller.deleteByQuery)
router.post("/login",controller.loginUser)
module.exports = router;