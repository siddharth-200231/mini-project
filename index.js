const express=require("express")
const app=express()
const users=require("./MOCK_DATA.json")
const port=8000;
app.listen(port,()=>{
    console.log(` The server is listening at : ${port} `)
})