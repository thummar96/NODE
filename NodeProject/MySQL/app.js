const express = require('express');
const mysql = require('mysql');
const cors = require("cors");
const authJwt = require("./Helpers/jwt");
const errorHandler = require("./Helpers/error-handler");
require("dotenv/config");
const PORT = process.env.PORT;
const app = express();


//cors
app.use(cors());
app.options("*", cors());

//json
app.use(express.json());
app.use(express.urlencoded());

// Authentication 
app.use(authJwt());
app.use(errorHandler);

//Default
app.get('/', (req, res) => {
    res.json({ 'msg': "default" });
});

// database connect
// const connection = mysql.createConnection({
//     host: "127.0.0.1",
//     user: "root",
//     password: "admin@123",
//     database: "kinjal",

// database connect
const connection = require("./Middleware/dbConnection");
connection.connect((error) => {
    if (error) {
        console.log(error)
    } else {
        console.log("databases connected successfully");
    }
});

// connection.connect(function (error){
//     if(error){
//         console.log(error);
//     }
//     else{
//         console.log("Database connected Successfully...!!!");

//     }
// });



// user
app.use('/users', require('./routes/users'));

//category
app.use('/category', require('./routes/category'));

//Products
app.use('/products', require('./routes/prodcuts'));

//Orders
app.use('/orders', require('./routes/orders'));



//server Listen
app.listen(PORT, () => {
    console.log(`Server listening Port : ${PORT}`);
});