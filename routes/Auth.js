const router=require('express').Router();
const User=require('../models/User');

router.post("/register",async(req,res)=>{
    //const {name,email,password}=req.body;
    let firstUser=new User(
        {
        name:req.body.name,
        email:req.body.email, 
        password:req.body.password
    })
    try{
        const savedUser=await firstUser.save();
        res.send(savedUser);
    }
    catch(error){console.log(error)}
    // .then (()=> newUser.saved())
    // .catch(errors=>res.send(errors))
})

module.exports=router;