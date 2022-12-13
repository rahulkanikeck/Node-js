// const express = require('express');
// const app = express()

// app.get('/welcome',(req,res)=>{
//     res.send("Dominos needs your help!")
// })
// app.get('/contact',(req,res)=>{
//     res.JSON.stringify({  
//         phone: '18602100000', 
//         email: 'guestcaredominos@jublfood.com' 
//        }
//     )
// })
// app.get('*',(req,res)=>{
//     res.send("error code 404")
// })
// app.listen(8081,()=>{
//     console.log("listing to port 8081")
// })
const http = require ("http")
const server = http.createServer((req,res)=>{
    res.end("Hello")
})
server.listen(8081,()=>{
    console.log("listen to port 8081")
})