const express=require('express')
const router=express.Router()
const Customer=require('../Models/customer')
const Transanction=require('../Models/transanction')


router.get('/',async(req,res)=>{
    try{
        const customers= await Customer.find()
        res.json(customers)
    }catch(err){
        res.send('Error'+err)
    }
    

})

router.get('/:id',async(req,res)=>{
    try{
        const customer= await Customer.findById(req.params.id)
        res.json(customer)
    }catch(err){
        res.send('Error'+err)
    }
    

})
router.get('/:id',async(req,res)=>{
    try{
        const customer= await Customer.findById(req.params.id)
        res.json(customer)
    }catch(err){
        res.send('Error'+err)
    }
    

})


router.patch("/:id/:id1",async(req,res)=>{
    try{
        const sender=await Customer.findById(req.params.id)
        const receiver=await Customer.findById(req.params.id1)
        sender.amount=sender.amount-req.body.amount
        receiver.amount=receiver.amount+req.body.amount
        const a1=await sender.save()
        const a2=await receiver.save()
        res.json(a1)
        res.json(a2)
    }catch(err){
        res.send("error"+ err)
    }
})

router.post('/:id/:id1',async(req,res)=>{
    const sender=await Customer.findById(req.params.id)
    const receiver=await Customer.findById(req.params.id1)
    
    const add= new Transanction({
        sender:sender.name,
        receiver:receiver.name,
        amount:req.body.amount
    })

    try{
        const a1=await add.save()
        res.json(a1)
    }catch(err){
        res.send("error")
    }
})



module.exports=router