const fs = require('fs')
const http = require("http")
const fileRead = fs.readFileSync('index.html')
const server = http.createServer((req,res)=>{
    res.writeHead(200,{'content-type': 'text/html'})
    res.end(fileRead)
})
server.listen(8000,'127.0.0.1',()=>{
    console.log("Done")
})