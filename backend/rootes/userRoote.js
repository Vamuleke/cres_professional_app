import express from "express";
import User from "../models/userModel.js";
import { getToken, isAdmin, isAuth } from "../util.js";
import expressAsyncHandler from 'express-async-handler'
const rooter = express.Router();
rooter.post('/signin',expressAsyncHandler(async (req,resp)=>{
  const signinUser = await User.findOne({
    email : req.body.email,
    password : req.body.password
  })
  if(signinUser){
resp.send({
  _id:signinUser.id,
  name:signinUser.name,
  email:signinUser.email,
  photo:signinUser.photo,
  isAdmin:signinUser.isAdmin,
  token:getToken(signinUser)
})
  }else{
          resp.status(401).send({message:"nom d'utilisateur ou mot de passe incorrect"})
  }
}))
rooter.post('/register',async (req,resp)=>{
  const user=new User({
    name:req.body.name,
    email:req.body.email,
    password:req.body.password
  });
const newUser = await user.save();
  if(newUser){
resp.send({
  _id:newUser.id,
  name:newUser.name,
  email:newUser.email,
  photo:newUser.photo,
  isAdmin:newUser.isAdmin,
  token:getToken(newUser)
})
  }else{
          resp.status(401).send({message:"invalid user data"})
  }
})
//


export default rooter