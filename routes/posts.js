const router=require('express').Router();
const User = require('../models/User');
const verifyAccess=require('./verifyToken');

router.get("/",verifyAccess,(req,res)=>{
    res.send( req.user);
    User.findOne({_id:req.user})
})

module.exports=router