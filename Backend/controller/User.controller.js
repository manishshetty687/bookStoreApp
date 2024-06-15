import User from "../Model/User.model.js";
import bcryptjs from "bcryptjs";
export const signup=async(req,res)=>{
    try {
        const {name,email,password}=req.body;
        const user= await User.findOne({email});
        if(user){
            return res.status(400).json({message:"user already have account"});
        }
      const  hashPassword= await bcryptjs.hash(password,10);
      const  createUser=new User({
        name:name,
        email:email,
        password:hashPassword,
      });
      await createUser.save();
      return res.status(201).json({message:"user connected successfully",user:{
        _id:createUser._id,
        name:createUser.name,
        email:createUser.email,
      }})
    } catch (error) {
        console.log("error:"+error.message)
        return res.status(500).json({message:"internal error"});
    }
};
export const login=async(req,res)=>{
    try {
        const{email,password}=req.body;
        const user=await User.findOne({email});
        const isMatch=await bcryptjs.compare(password,user.password);
        if(!user||!isMatch){
            return res.status(400).json({message:"invalid email or password"});
        }else{
        res.status(201).json({message:"user connected successfully",
            user:{
                _id:user._id,
                name:user.name,
                email:user.email,
            },
        });
        }
    } catch (error) {
        console.log("error",+error.message);
        return res.status(500).json({message:"internal error"});
    }
};