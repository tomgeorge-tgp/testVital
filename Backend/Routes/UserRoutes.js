import {response, Router} from "express";
import {check,validationResult} from "express-validator";
const UserRouter = Router();
import bcrypt from "bcrypt";
import User from "../Models/User.js"
import cors from "cors";

import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import auth from "../Middleware/auth.js";


dotenv.config();

//signup page post routes
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
  try{
      console.log(req.body);
      // res.header("Access-Control-Allow-Origin", "*");
      const errors = validationResult(req);
      
      if(!errors.isEmpty())
      {
        console.log(errors.array())
        return res.status(400).json({errors:errors.array() })
  
      }
      
      const {name,email,password,phoneNumber,gender,dob} =req.body;
      
      // let user = await User.findOne({email: email});
      let user = await User.findOne({phoneNumber: phoneNumber});
      if(user) throw new Error("Error creating account")  //To check if the user already exists
  
      user=new User({name,email,password,phoneNumber,dob,gender});
      const salt= await bcrypt.genSalt(Number(process.env.SALT_ROUNDS));
      const hash= await bcrypt.hash(user.password,salt);
      user.password=hash;
      await user.save();
      console.log("user saved");

      const jwtToken = jwt.sign({ id: user._id, name: user.name }, process.env.JWT_ACCESS_TOKEN_SECRET);
      res.status(201).json({msg: "Account created successfully!", accessToken: jwtToken, user: {_id: user._id, name: user.name, email: user.email,gender:user.gender,dob:user.dob}, errors: []})
    }
    catch(err){
            console.log(err);
            return res.status(400).json({errors:[{msg: err}]});
    } 
});




UserRouter.post('/login',[
  //check("name").not().isEmpty(),
  // check("email").isEmail(),
  check("phoneNumber").not().isEmpty(),
  check("password").not().isEmpty(),
  check("password").isLength({min:6}),
  // check("phoneNumber").isMobilePhone('any'),  //en-IN
  // check("dob").not().isEmpty(),
  // check('dob').isISO8601(),
  // check("gender").not().isEmpty(),
  // check("gender").matches(/^(?:F|M|T|P)$/),   //regular expression validator
  // check("dob").matches(/^(0[1-9]|[12][0-9]|3[01])[-](0[1-9]|1[012])[-](19|20)\d\d$/),
], async(req, res) =>
{
  try
  {
  console.log(req.body);
  // res.header("Access-Control-Allow-Origin", "*");
  const errors = validationResult(req);
  
  if(!errors.isEmpty())
  {
    console.log(errors.array())
    return res.status(400).json({errors:errors.array() })
  }
  
  // const {name, phoneNumber, password} = req.body;
  const {phoneNumber, password} = req.body;
  let user = await User.findOne({phoneNumber: phoneNumber});
  if(user==null)
  {
    throw new Error("Invalid login details!");
  }

  
    if(await bcrypt.compare(password, user.password))
    {
      console.log("User loggged in: ", user._id, " ", new Date().toISOString());
      const jwtToken = jwt.sign({ id: user._id, name: user.name }, process.env.JWT_ACCESS_TOKEN_SECRET);
      res.status(201).json({msg: "Logged in successfully!", accessToken: jwtToken, user: {_id: user._id,name: user.name, email: user.email,gender:user.gender,dob:user.dob}, errors: []}) 
    }
    else
    {
      throw new Error("Invalid login details!");
    }
  }
  catch(err){
      console.log(err);
      return res.status(400).json({errors:[{msg: err}]});
  }
});


UserRouter.get('/:id',async(req, res) => {
  console.log("here");
  const userId=req.params.id;
  let user = await User.findById(userId);
  console.log(user);

  if(user==null)
  {
    throw new Error("Invalid login details!");
    res.status(404).json({errors:[{msg: "User not found!"}]});
  }

});






export default UserRouter;