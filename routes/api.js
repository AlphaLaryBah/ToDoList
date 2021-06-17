const express = require('express');

const router = express.Router();

const whatTodo = require('../models/newlist')




router.get("/", (req, res) => {

    whatTodo.find({})
        .then((data) => {
            // console.log('Data: ', data);
            res.json(data);

        })
        .catch((error) => {
            console.log('error: ', error);

        });


});


// RECEIVES DATA FROM REACT

router.post("/save", (req, res) => {
    console.log('Body:', req.body.isCompleted)
    const data = req.body;
    // new instance of what todo
    const newToList = new whatTodo(data);
    console.log(data.isCompleted)
    // save

    newToList.save((error) => {
        if (error) {
            res.status(500).json({ msg: 'Sorry, internal server error' })
        } else {
            res.json({
                msg: "Data Has been saved"
            });

        }
    });



});


module.exports = router;