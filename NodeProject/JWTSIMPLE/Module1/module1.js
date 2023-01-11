// const express = require("express");
// const middlewere = require("../Middlewere/middlewere");
// const tokenobj = require("../Token/token");
// module1 = express.Router();

// module1.get("/",(req,res)=>{
//     const headToken = req.headers.token;
//     if(headToken==tokenobj.token)
//     res.json({"msg":"inside module1 success","token":tokenobj.token});

//     else
//     res.json({"msg":"inside module1 Fail"});
// });

// module.exports=module1;





const express = require('express');
const middleware = require('../Middleware/middleware')
module1 = express.Router();


module1.post('/', [middleware], (req, res) => {
    res.json({ "msg": "inside module1 success" });
});

module.exports = module1;