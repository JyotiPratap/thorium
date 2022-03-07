const mid1 = function (req, res, next) 
{    let freeUser = req.headers["isfreeappuser"]
console.log(freeUser)
     if (freeUser) {
        next()
    } else { 
        res.send("request is missing a mandatory header")
    }

}   

module.exports.mid1 = mid1