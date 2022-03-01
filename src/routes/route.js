const express = require('express');
const router = express.Router();
const BookController = require("../controllers/bookControllers")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
}) 
 
router.post("/createBook", BookController.createBook)

router.get("/bookList", BookController.bookList)

router.post("/getBooksInYear/:Year",BookController.getBooksInYear)

// router.post("/getParticularBooks",BookController.getParticularBooks)

 router.get("/getXINRBooks", BookController.getXINRBooks)

// router.get("/getRandomBooks", BookController.getXINRBooks)
  
module.exports = router;  