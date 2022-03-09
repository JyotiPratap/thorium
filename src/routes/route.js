const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const middleware= require("../middleWares/tokenValidate")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId",middleware.tokenChecker, userController.getUserData)

router.put("/users/:userId",middleware.tokenChecker, userController.updateUser)

router.delete("/users/:userId",middleware.tokenChecker,userController.deleteUser)

module.exports = router;