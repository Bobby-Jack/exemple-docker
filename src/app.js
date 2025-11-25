const express = require('express')

const app = express()
const port = 3000

app.get("/", (_, res)=>{
    res.json({value:"hello"})
})

app.listen(port,()=>{
    console.log("exemple app listening on port "+port);
    
})