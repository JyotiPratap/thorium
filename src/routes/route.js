let obj = require("../loggerfolder/logger")
const express = require('express');
const router = express.Router();

router.get('/test-me', function (req, res) {
    obj.welcome("thorium")
    console.log(obj.endpoint)
    res.send('Welcome to my application')
});
module.exports = router;