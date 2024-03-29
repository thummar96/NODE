const express = require("express");
const getData=express.Router();

const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;

const url = 'mongodb+srv://admin:admin@cluster0.vivlma3.mongodb.net/?retryWrites=true&w=majority';
// const url = 'mongodb://localhost:7080';

// getData.get("/",(req,res)=>{

//     mongoClient.connect(url,(err,connection)=>{
//         if(err)
//             throw err;
//         else
//         {
//             const db = connection.db("node_5")
//             db.collection("books").find().toArray((err,arr)=>{
//                 console.log(arr);
//                 res.send(arr);
//             })
//         }
//     })
// });

getData.get("/",(req,res)=>{

    mongoClient.connect(url,(err,connection)=>{
        if(err)
            throw err;
        else
        {
            const db = connection.db("books")
            db.collection("book").find().toArray((err,arr)=>{
                console.log(arr);
                res.send(arr);
            })
        }
    })
});

module.exports=getData;