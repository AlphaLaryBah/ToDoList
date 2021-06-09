const express = require('express');

const router = express.Router();

const whatTodo = require('../models/newlist')




router.get("/", (req, res) => {

    whatTodo.find({})
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);

        })
        .catch((error) => {
            console.log('error: ', error);

        });





});
router.get("/name", (req, res) => {
    const data = {
        username: "Maimouna",
        age: 33

    };
    res.json(data);
});


module.exports = router;