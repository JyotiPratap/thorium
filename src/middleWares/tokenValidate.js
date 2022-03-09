const jwt = require("jsonwebtoken");

const tokenChecker = function(req,res,next){

    let token = req.headers["x-auth-token"]
    if(!token){
        return res.send("token missing")
    }
    let decoderToken = jwt.verify(token, "functionup-thorium");
    if(!decoderToken){
        return res.send("Invalid token")
    }
    next()
} 
module.exports.tokenChecker=tokenChecker