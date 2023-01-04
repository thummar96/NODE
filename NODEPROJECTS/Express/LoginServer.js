const express = require("express");
const app = express();
const PORT = 8090;

app.use(express.json());

app.get("/",(req,res)=>{
    res.json({msg:"Hello"});
});


const login = require("./login");
app.use("/login",login);


app.listen(PORT,()=>{
    console.log(`server listening port ${PORT}`);
})
