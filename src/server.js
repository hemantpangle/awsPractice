const express=require('express')
const app=express()

app.get('/',(request,response)=>{
    response.send('public/App.js')
})
app.listen(4000,'0.0.0.0',()=>{
    console.log("server is now started at port 4000");
})