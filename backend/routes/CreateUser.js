const express = require('express')
const router=express.Router()
const User=require('../models/User')

const secret="HellomynameisZohebAlamMyhobbyiszb"
const jwt=require("jsonwebtoken")
const bcrypt=require('bcrypt')



router.post("/createuser",async(req,res)=>{


    const salt=await bcrypt.genSalt(10);
    let secPassword=await bcrypt.hash(req.body.password,salt)


    try {
       await User.create({
            name:req.body.name,
            location:req.body.location,
            email:req.body.email,
            password:secPassword
        })
        res.json({success:true})
    } catch (err) {
        console.log(err)
        res.json({success:false})
    }
})

router.post("/loginuser",async(req,res)=>{
    try {
        email=req.body.email
      let usr= await User.findOne({email})
      if(!usr){
      return res.status(400).json({errors:"Wrong credentials"})
      }
      const pswrdcompare=await bcrypt.compare(req.body.password,usr.password)

      if(!pswrdcompare)
      {
        return res.status(400).json({errors:"Wrong credentials"})

      }



      
        const data={
            user:{
                id:usr.id
            }
        }
        const authToken=jwt.sign(data,secret)


      
      return res.json({success:true,authToken})
        
    } catch (err) {
        console.log(err)
        res.json({success:false})
    }
})



module.exports =router;