const express = require('express');
const router = express.Router();
const BookController = require("../controllers/bookControllers")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
}) 
 
router.post("/createBook", BookController.createBook  )
   
router.get("/getBooksData", BookController.getBooksData)
  
module.exports = router; 