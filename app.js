const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/views/home.html");
});

app.get("/login",(req,res)=>{
    res.sendFile(__dirname + "/views/login.html");
});

app.get("/store",(req,res)=>{
    res.sendFile(__dirname + "/views/store.html");
});

app.get("/support",(req,res)=>{
    res.sendFile(__dirname + "/views/support.html");
});

app.get("/health",(req,res)=>{
    res.json({
        status:"UP"
    });
});

app.listen(8080,()=>{
    console.log("Finance App Started");
});
