const jwt = require("jsonwebtoken")
const authentication = function(req,res,next){
    try{
        let token = req.headers["x-api-key"]
        if(!token)
        return res.status(401).send({status: false, msg:"Token not present"})
    
        let decodedToken = jwt.verify(token,"Project_1")
        if(!decodedToken)
        return res.status(401).send({status:false,msg:"Token is invalid"})
    next()
    }
    catch(error)
    {
        res.status(500).send({status : false,msg : error.message})
    }
}
const authorization = function(req, res, next) {
    
    try{
        let token = req.headers["x-api-key"]
        if(!token)
        return res.status(401).send({status: false, msg:"Token not present"})
    
        let decodedToken = jwt.verify(token,"Project_1")
        if(!decodedToken)
        return res.status(401).send({status:false,msg:"Token is invalid"})
    
        let userId = req.query.authorId
        if (!userId)
        return res.status(400).send({ status: false, msg: "Please Send Author Id" })

        let userLoggedIn = decodedToken.userId
    
        if(userId !== userLoggedIn ){
            
            res.status(403).send({status : false, msg : "User is not Allowed access the request"})
        } next()
    }
        catch(error)
        {   console.log(error)
            res.status(500).send({status: false ,msg : error.message})
        }

    
}


    module.exports.authorization=authorization
    module.exports.authentication=authentication