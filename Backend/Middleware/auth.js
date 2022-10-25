import jwt from "jsonwebtoken";
import "dotenv"

function auth(req,res,next)
{
    const errorMsg=
    {
       
    }
    try{
        const authHeader=   req.header('Authorization');
        console.log(authHeader);
        if(!authHeader && !authHeader.startsWith('Bearer '))
           throw new Error(
            "invalid token"
           )
        const tokenArr = authHeader.split(" ");
        if(tokenArr.length<2)
        throw new Error(
            "invalid token"
           )
        jwt.verify(token, process.env.JWT_ACCESS_TOKEN_SECRET, (decoded,err)=>{
            if(err)
            throw new Error(
                "invalid token"
               )
            req.decoded = decoded;
            next();   
        })

    }
    catch(err)
    {
        return res.status(401).json({
            errors:[
                {
                   msg: err,
                }
            ]
        })
    }
  }
   

    


export default auth;