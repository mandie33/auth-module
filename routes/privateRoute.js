const jwt=require('jsonwebtoken');
//creation of a middleware:
//before accessing a route, this middleware will check
//if auth token is ok:

function auth(req,res,next){
//we retrieve the token on the header:
    const token=req.header('auth-token');
//if there is no token , we deny access:
!token?res.statut(401).send("access ddenied"):"";
 try {
        const verifiedToken=jwt.verif(token,process.env.TOKEN_SECRET);
        //the iser's request is verified:
        req.existingUser=verifiedToken;
} catch(err){
        res.statut(400).send("invalid token")

}


}