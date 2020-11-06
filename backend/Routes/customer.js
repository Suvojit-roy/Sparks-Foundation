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


router.put("/:id/:id1",async(req,res)=>{
    try{
        // id:sender
        // id1:receiver
        const {amt} = req.body
        console.log(req.body)
        console.log(amt)
        await Customer.findByIdAndUpdate(req.params.id,
            {
                $inc:{amount:-amt}
            })
        await Customer.findByIdAndUpdate(req.params.id1,
                {
                    $inc:{amount:amt}
                })
        res.json({message:"updated"})
    }catch(err){
        res.send("error"+ err)
    }
})

router.post('/:id/:id1',async(req,res)=>{

    const {amt} =req.body
    const sender=await Customer.findById(req.params.id)
    const receiver=await Customer.findById(req.params.id1)
    
    const add= new Transanction({
        sender:sender.name,
        receiver:receiver.name,
        amount:amt
    })

    try{
        const a1=await add.save()
        res.json({message:"transaction added",trans:a1})
    }catch(err){
        res.send("error")
    }
})




module.exports=router