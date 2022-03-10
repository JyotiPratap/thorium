const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  try{
     let data = req.body;
     if(Object.keys(data).length != 0){
     let savedData = await userModel.create(data);
     console.log(req.newAtribute);
     res.status(201).send({ msg: savedData });
   }
   else res.status(400).send({msg:"bad request"})
  }
  catch(err){
     console.log("this is the error:",err.message)
      res.status(500).send({msg:"Error",error:err.message})
   }
};
 

const loginUser = async function (req, res) {
  try{
  let userName = req.body.emailId;
  let password = req.body.password;
  if(!userName||!password){
    res.status(400).send({msg:"Please input both userName and password."})
  }
  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.send({
      status: false,
      msg: "username or the password is not corerct",
    });
    if (!user)
  return res.status(200).send({
      status: false,
      msg: "username or the password is not corerct",
    });
    
  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "thorium",
      organisation: "FUnctionUp",
    },
    "functionup-thorium"
  );
  res.setHeader("x-auth-token", token);
  res.status(200).send({ status: true, data: token });
}
catch{
  console.log("This is the error :", err.message)
  res.status(500).send({ msg: "Error", error: err.message })
  }
}


  
const getUserData = async function (req, res) {
  try{
  let token = req.headers["x-Auth-token"];
   token = req.headers["x-auth-token"];
  if (!token) 
  return res.send({ status: false, msg: "token must be present" });
  console.log(token);
  let decodedToken = jwt.verify(token, "functionup-thorium");
  if (!decodedToken)
    return res.send({ status: false, msg: "token is invalid" });

  let userId = req.params.userId;
  if(!userId) return res.status(400).send({msg:"Please input user id."})
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
  return res.status(200).send({ status: false, msg: "No such user exists" });
  res.status(404).send({ status: true, data: userDetails });
} catch(error){
  return res.status(500).send(error.message)
 }
};

const updateUser = async function (req, res) {
  try{
  let userId = req.params.userId;
  if (!userId){
    return  res.status(400).send({msg:"Please input user Id."})
    }
  let user = await userModel.findById(userId);
  if (!user) {
    return  res.status(400).send("No such user exists");
  }
  // let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId },{$set:{age:40}}, {$new:true});
  res.status(200)({ status: updatedUser, data: updatedUser });
}catch{
  res.status(500).send(error.message)
}};


const deleteUser = async function(req,res){
    let token = req.headers["x-auth-token"];
    if(!token) return res.send({status: false,msg:"token must be present"})
    let userId = req.params.userId;
    let userDel = await userModel.findOneAndUpdate({_id:userId},{$set:{isDeleted:true}},{$new:true});
    res.send({status:true,data:userDel})
};

const postMessage = async function(req,res){
    let message = req.body.message
    let token = req.headers["a-auth-tiken"]
    if(!token)
    return res.send({status:false,msg:"tokekn must be present in the request header"})
    let decodedToken = jwt.verify(token,"functionup-thorium")

    if(!decodedToken)
    return res.send({status:false,msg:"token is not valid"})
    let userToBeModified = req.params.userId
    let userLoggedIn=decodedToken.userId

    if(userToBeModified!= userLoggedIn)
    return res.send({status:false,msg:"user logged is not allowed to modified the record"})

    let user = await userModel.findById(req.params.userId)
    if(!user)
    return res.send({status:false,msg:"no such user exist"})

    let updatedPosts = user.posts
    updatedPosts.push(message)
    let updatedUser=await userModel.findOneAndUpdate({_id:user>_id},{posts:updatedPosts},{new:true})
    return res.send({status:true,data:updatedUser})
}


module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser;
module.exports.postMessage = postMessage;