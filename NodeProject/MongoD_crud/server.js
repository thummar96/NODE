const express=require("express");
const app=express();
const PORT=7080;

app.use(express.json());

const getData = require("./getData/getData");
app.use("/getData",getData);

const postData = require("./postData/postData");
app.use("/postData",postData);

const putData = require("./PutData/putData");
app.use("/putData",putData);

const deleteData = require("./deleteData/deleteData");
app.use("/deleteData",deleteData);

app.listen(PORT,()=>{
    console.log(`Server Listening PORT ${PORT}`);
});
