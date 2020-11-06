const express=require('express')
const router=express.Router()
const Customer=require('../Models/customer')
const Transanction=require('../Models/transanction')



router.get('',async(req,res)=>
{
    try{
        const transactions= await Transanction.find()
        res.json(transactions)
    }catch(err){
        res.send('Error'+err)
    }
})



module.exports=router