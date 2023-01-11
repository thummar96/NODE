// const express = require("express");
// const tokenobj = require("../Token/token");
// module2 = express.Router();

// module2.get("/",(req,res)=>{
//     const headToken = req.headers.token;
//     if(headToken==tokenobj.token)
//     res.json({"msg":"inside module2 success","token":tokenobj.token});

//     else
//     res.json({"msg":"inside module2 Fail"});
// });


// module.exports=module2;





const express = require('express');
const middleware = require('../Middleware/middleware')
module2 = express.Router();


module2.post('/', [middleware], (req, res) => {
    res.json({ "msg": "inside module2 success" });
});

module.exports = module2;