const express = require("express");

const app = express();


app.use("/user",(req,res) =>{
    res.send("hi saicharan");
});

app.use("/getdata",(req,res) =>{
    res.send("Data is sent successfully");
});
app.get("/",(req,res) =>{
    res.send("welcome to our dev app");
});

app.listen(7777,()=>{
    console.log("server is listenting at port 7777");
});