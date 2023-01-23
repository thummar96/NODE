const express = require('express');
const mongoose = require('mongoose');
const User = require("../models/user");
const getUsersData = express.Router();


getUsersData.get('/getUser', (req, res) => {
    User.find({}, (err, result) => {
        if (err) throw err;
        else {
            res.send({result});
            console.log(result);
        }
    });
});


module.exports = getUsersData;