const express = require('express');
const router = express.Router();
const controller= require("../controllers/controllers")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", controller.createAuthor)
router.post("/createBlog", controller.createBlog)
router.get("/getblogs", controller.getblog)
router.put("/blogs/:blogId",controller.updateBlog)
router.delete("/deleteBlogs/:blogId",controller.deleteBlogs)
router.delete("/blogs",controller.deleteByQuery)
module.exports = router;