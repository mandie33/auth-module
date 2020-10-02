const router=require('express').Router();
const User=require('../models/User');
const {registerData,loginData}=require("./validation");
const bcrypt=require('bcrypt');
const jwt = require('jsonwebtoken');


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
    //register new user
    existingUser?res.status(400).send("this user already exists"):firstUser=new User(
        {name,email,password:hashedPassword})
    try{
        await firstUser.save();
        res.send({user:firstUser._id});
    }
    catch(error){console.log(error)}
    
})

router.post("/login",async(req,res)=>{
        //validate data before submitting:
    const {error}=loginData(req.body);
    error?res.status(400).send(error.details[0].message):"";
        //checking if a user's email is the same as this already saved:
    let existingUser=await User.findOne({email:req.body.email});
    !existingUser?res.send("email or pwd don't exist"):"";
    //pwd correct?
    let validPwd=bcrypt.compare(req.body.password,existingUser.password );
    !validPwd?res.send("ooouupps email or pwd don't exist "): "";

    //create and assign a token
    const token=jwt.sign(
        {id:existingUser._id},
        process.env.TOKEN_SECRET
    )
    res.header('auth-token',token).send(token);
    res.send("success")
})

module.exports=router;