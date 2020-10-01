const router=require('express').Router();
const User=require('../models/User');

router.post("/register",(req,res)=>{
    const {name,email,password}=req.body;
    let newUser=new User(
        {name,email,password}
    )
})

module.exports=router;