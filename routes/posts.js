const router=require('express').Router();
const verifyAccess=require('./verifyToken');

router.get("/",verifyAccess,(req,res)=>{
    res.send({
            posts:{
                title:"my 1st post",
                description:"blablablablabla"
            }
    })
})

module.exports=router