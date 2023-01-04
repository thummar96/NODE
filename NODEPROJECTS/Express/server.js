const express = require("express");
const app = express();
const PORT = 8090;


// app.get("/",(req,res)=>{
//     res.json({msg:"Hello"});
// });


// app.get("/Login",(req,res)=>{
//     res.json({msg:"Hello"});
// });

// app.post("/Login",(req,res)=>{
//     res.json({msg:"login post"});
// });


// app.get("/login",(req,res)=>{
//     console.log(req.query);
//     res.json({msg:"Hello"});
// });


app.get("/login/:uname/:upwd",(req,res)=>{
    console.log(req.params.uname);
    console.log(req.params.upwd);

});


app.listen(PORT,()=>{
    console.log(`server listening port ${PORT}`);
})

