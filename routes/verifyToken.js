const jwt=require('jsonwebtoken');
//creation of a middleware:
//before accessing a route, this middleware will check
//if auth token is ok:

module.exports= function auth(req,res,next){
//we retrieve the token on the header:
    const token=req.header('auth-token');
//if there is no token , we deny access:
!token?res.status(401).send("access ddenied"):"";
 try {
        const verifiedToken=jwt.verif(token,process.env.TOKEN_SECRET);
        //the iser's request is verified:
        req.existingUser=verifiedToken;
} catch(err){
        res.status(400).send("invalid token")

}

next()

}