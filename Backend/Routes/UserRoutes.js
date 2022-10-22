import {Router} from "express";
import {check,validationResult} from "express-validator";
const UserRouter = Router();
import bcrypt from "bcrypt";
import User from "../Models/User.js"
import cors from "cors";
const SALT_ROUNDS = 5;

UserRouter.post('/signup',[
    check("name").not().isEmpty(),
    check("email").isEmail(),
    check("password").not().isEmpty(),
    check("password").isLength({min:6}),
    check("phoneNumber").not().isEmpty(),
    check("phoneNumber").isMobilePhone('any'),  //en-IN
    check("dob").not().isEmpty(),
    check('dob').isISO8601(),
    check("gender").not().isEmpty(),
    check("gender").matches(/^(?:F|M|T|P)$/),   //regular expression validator
    // check("dob").matches(/^(0[1-9]|[12][0-9]|3[01])[-](0[1-9]|1[012])[-](19|20)\d\d$/),
], async(req, res) =>
{
    console.log(req.body);
    // res.header("Access-Control-Allow-Origin", "*");
    const errors = validationResult(req);
    
    if(!errors.isEmpty())
    {
      console.log(errors.array())
      return res.status(400).json({errors:errors.array() })

    }
    
    let {name,email,password,phoneNumber,gender,dob} =req.body;
    
    let user=await User.findOne({email: email});
    if(user) return res.status(401).send({errors:"User already exists"});  //To check if the user already exists
    
    try{

      user=new User({name,email,password,phoneNumber,dob,gender});
      const salt= await bcrypt.genSalt(SALT_ROUNDS);
      const hash= await bcrypt.hash(user.password,salt);
      user.password=hash;
      await user.save();
      console.log("user saved")
    }
    catch(err){
            // console.log(err);
            return res.status(400).json({errors:err.message});
    } 

   return res.status(201).json({user: {name: user.name, email: user.email,gender:user.gender,dob:user.dob} });

});

export default UserRouter;