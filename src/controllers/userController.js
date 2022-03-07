// const { count } = require("console")
// const user = require("../models/userModel")

// const createUser= async function (req, res){
//     let data= req.body
//     let savedData= await user.create(data)
//     res.send({msg: savedData})
// }
// module.exports.createUser= createUser


const UserModel= require("../models/userModel")

const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}


module.exports.createUser= createUser

