const jwt = require("jsonwebtoken")
 
const authenticate = function(req, res, next){
    let token = req.headers['x-auth-token']
    if(!token)
     return res.send({msg:"Token is required"})
    let decodedToken = jwt.verify(token, "functionup-thorium",)
    if(!decodedToken) 
    return res.send({msg: "token is invalid"})

    let userToBeModified = req.params.userID
    let userLoggedIn = decodedToken.userID
    if(userToBeModified !== userLoggedIn) 
    return res.send({status: false, msg:"User is not allowed for logged in"})
    next()
}
 
module.exports.authenticate = authenticate
