const router=require('express').Router();
const User=require('../models/User');
const {registerData,loginData}=require("./validation");


router.post("/register",async(req,res)=>{
    const {name,email,password}=req.body;
    let firstUser;
    //validate data before submitting:
    const {error}=registerData(req.body);
    error?res.status(400).send(error.details[0].message):firstUser=new User(
        {name,email,password})
    try{
        const savedUser=await firstUser.save();
        res.send(savedUser);
    }
    catch(error){console.log(error)}
    // .then (()=> newUser.saved())
    // .catch(errors=>res.send(errors))
})

module.exports=router;