const mongoose=require('mongoose')

const transanctionSchema=new mongoose.Schema({
    sender:{
        type:String,
        required:true
    },
    receiver:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true,
        
    }
})

module.exports=mongoose.model('Transanction',transanctionSchema)