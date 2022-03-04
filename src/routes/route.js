const express = require('express');
const router = express.Router();

const authorController = require("../controllers/authorController")
const bookController = require("../controllers/bookController")
const publisherController = require("../controllers/publisherController")
 
 router.post("/createAuthor", authorController.createAuthor  )
router.post("/createPublisher", publisherController.createPublisher)
router.post("/createBook", bookController.createBook  )
router.get("/getBooks", bookController.getBooks)
router.put("/books", bookController.books)
router.put("/changeBookPrice", bookController.changeBookPrice)
module.exports = router;