
const express = require('express')
const router=express.Router()
const fooditems=require('../models/FoodItems')

router.get("/fetch",async(req,res)=>{

    fooditems.find({}).then((x)=>{
        
        global.food_items=x
        
        res.send(global.food_items)
      })
      .catch((err)=>{
        console.log(err)
      })

})

module.exports =router;

