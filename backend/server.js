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
app.use(cors()) 
const customerRouter=require('./Routes/customer')
app.use('/customer',customerRouter)
// const transanctionRouter=require('./Routes/transanction')
// app.use('/transanction',transanctionRouter)

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     next();
//   });

app.listen(9000,function(){
    console.log("server started")
})