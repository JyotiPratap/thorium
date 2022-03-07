const express = require('express');
const router = express.Router();

const UserController= require("../controllers/userController")
const OrderController= require("../controllers/orderController")
const ProductController= require("../controllers/productController")
const commonMw = require("../middleware/middleware")
 


router.post("/createUser", commonMw.mid1, UserController.createUser  )
router.post("/createProduct", ProductController.createProduct )
router.post("/createOrder", commonMw.mid1, OrderController.createOrder  )


module.exports = router;