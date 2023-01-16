const express = require("express");
const postData=express.Router();

const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;

const url = 'mongodb+srv://admin:admin@cluster0.vivlma3.mongodb.net/?retryWrites=true&w=majority';
// const url = 'mongodb://localhost:7080';

// postData.post("/",(req,res)=>{

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



postData.post("/",(req,res)=>{

        mongoClient.connect(url,(err,connection)=>{
            if(err)
                throw err;
            else
            {
                const db = connection.db("books")
                            db.collection("book").insertOne({"title":req.body.title,
                                                                "isbn":req.body.isbn,
                                                                "downloadable":req.body.downloadable,
                                                                "no_of_reviews":req.body.no_of_reviews},(err,result)=>{
                                                                    if(err)
                                                                        throw err;
                                                                    else{
                                                                        res.send({"insert":"success"});
                                                                    }
                                                                })
            
            }
        })
    });


module.exports=postData;