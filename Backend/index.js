const express = require("express")
const app =express();
const cors = require("cors")
const port =5000;
require("./db/config") 
let User = require("./db/user")
app.use(express.json());
app.use(cors());

app.get("/", (req,res)=>{
    res.send("api is working...")
})

app.post("/signup" , async (req,res)=>{
    let user = User(req.body);
    let result = await user.save();

    res.send(result)
})

app.listen(port , ()=>{
    console.log("server is running on ", port);
})