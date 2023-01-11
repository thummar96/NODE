// const express = require("express");
// const jwtToken = require("jwt-simple");
// const tokenobj = require("../Token/token")
// login = express.Router();


// login.get("/",(req,res)=>{
//     res.json({"msg":"success login"});
// });


// login.post("/",(req,res)=>{
//     const uname = req.body.uname;
//     const upwd = req.body.upwd;

//     if(uname=="admin" && upwd=="admin123")
//     {
//         const token = jwtToken.encode({uname:uname,upwd:upwd},"skill");
//         tokenobj.token = token;
//         res.json({login:"success",token:token})
//     }
//     else
//     {
//         res.json({login:"Fail"})
//     }
// });


// module.exports = login;



const express = require("express");
const jwtToken = require("jwt-simple");
const tokenObj = require('../Token/token');
login = express.Router();


login.get("/", (req, res) => {
    res.json({ 'msg': "inside a login" })
});

login.post("/", (req, res) => {
    const uname = req.body.uname;
    const upwd = req.body.upwd;
    if (uname=="admin" && upwd=="admin123") {
        const token = jwtToken.encode({uname:uname,upwd:upwd},"skill");
        tokenObj.token = token;
        res.json({ login: "Success", token: token });
    }
    else {
        res.json({ login: "Fail" });
    }
});

module.exports = login;