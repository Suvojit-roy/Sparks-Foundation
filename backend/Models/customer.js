const mongoose=require('mongoose')

const customerSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true,
        
    }
})

module.exports=mongoose.model('Customer',customerSchema)