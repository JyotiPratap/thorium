const express = require('express');
const router = express.Router();
const controller= require("../controllers/controllers")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", controller.createAuthor)
router.post("/createBlog", controller.createBlog)
router.get("/get/blogs", controller.getblog)
router.put("/blogs/:blogId",controller.updateBlog)
router.get("/deleteBlogs/:blogId",controller.deleteBlogs)
// router.delete("/deleteByQuery",controller.deleteByQuery)
// router.post("/login", controller.loginAuthor)
module.exports = router;