// const express = require("express");
// const tokenobj = require("../Token/token");
// module3 = express.Router();

// module3.get("/",(req,res)=>{
//     const headToken = req.headers.token;
//     if(headToken==tokenobj.token)
//     res.json({"msg":"inside module3 success","token":tokenobj.token});

//     else
//     res.json({"msg":"inside module3 Fail"});
// });


// module.exports=module3;




const express = require('express');
const middleware = require('../Middleware/middleware')
module3 = express.Router();


module3.post('/', [middleware], (req, res) => {
    res.json({ "msg": "inside module3 success" });
});

module.exports = module3;