const express = require('express');
const mongoose = require('mongoose');
const User = require("../models/category");
const getCategoryData = express.Router();


getCategoryData.get('/getCategory', (req, res) => {
    User.find({}, (err, result) => {
        if (err) throw err;
        else {
            res.send({result});
            console.log(result);
        }
    });
});


module.exports = getCategoryData;