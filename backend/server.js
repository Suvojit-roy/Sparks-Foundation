const express=require('express')
const mongoose=require('mongoose')
var cors = require('cors')


const url="mongodb://localhost/Bank"
const app=express()

mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology: true})
const con=mongoose.connection

con.on('open',function(){
    console.log("MONGO Connected")
})

app.use(express.json())
app.use(cors()) ;

const customerRouter=require('./Routes/customer')
app.use('/customer',customerRouter)
app.use('/transaction',require('./Routes/transactions'))




app.listen(9000,function(){
    console.log("server started")
})