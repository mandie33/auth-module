const router=require('express').Router();
const { findOne } = require('../models/User');
const User=require('../models/User');
const {registerData,loginData}=require("./validation");
const bcrypt=require('bcrypt');


router.post("/register",async(req,res)=>{
    const {name,email}=req.body;
    let firstUser;
    //validate data before submitting:
    const {error}=registerData(req.body);
    error?res.status(400).send(error.details[0].message):"";
    //checking if a user already exists:
    let existingUser=await User.findOne({email:req.body.email});
    //hash password
    const salt= await bcrypt.genSalt(10);
    const hashedPassword= await bcrypt.hash(req.body.password, salt);

    existingUser?res.status(400).send("this user already exists"):firstUser=new User(
        {name,email,password:hashedPassword})
    try{
        const savedUser=await firstUser.save();
        res.send(savedUser);
    }
    catch(error){console.log(error)}
    // .then (()=> newUser.saved())
    // .catch(errors=>res.send(errors))
})

module.exports=router;