const express = require('express');
const router = express.Router();

const whatTodo = require('../models/newlist')
const Deleted = require('../models/DeleteSaved')

router.get("/", (req, res) => {
    whatTodo.find({})
        .then((data) => {
            // console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', error);

        })
})

// RECEIVES DATA FROM REACT
router.post("/save", (req, res) => {
    // console.log('Body:', req.body.delete)
    const data = req.body;
    // new instance of what todo
    const newToList = new whatTodo(data);
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
    const toBeDeleted = req.body.delete
    // console.log(toBeDeleted)
    whatTodo.findByIdAndRemove(toBeDeleted, function (err) {
        if (!err) {
            console.log("Successfully Deleted the Item")
        }
    })
});

//DELETES ALL
router.post("/delete", (req, res) => {
    // console.log('Delete:', req.body.delete)
    const data = req.body.delete;
    // new instance of Deleted
    const deletedList = new Deleted(data);
    // save
    deletedList.save((error) => {
        if (error) {
            res.status(500).json({ msg: 'Sorry, internal server error' })
        } else {
            res.json({
                msg: "Data Has been saved"
            });
        }
    });
});


router.get("/delete", (req, res) => {
    Deleted.find({})
        .then((data) => {
            // console.log('Data deleted: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', error);
        })
})


module.exports = router;




// router.post("/query", (req, res) => {
    // console.log('Body:', req.body)

    //INCREMENT CURRENT DATE BY A DAY
    // let laterDate = new Date(req.body.query);
    // add a day
    // laterDate.setDate(laterDate.getDate() + 1);
// console.log(laterDate)
    // //INCREMENT CURRENT DATE BY A DAY FIND BY TIMESTAMP WITH QUERY
    // console.log("get"+req.body.query)
    // let laterDate = new Date(2021 - 06 - 23);
    // // add a day
    // laterDate.setDate(laterDate.getDate() + 1);

    // console.log(laterDate)
    // Deleted.find({
    //     createdAt: {
    //         $gte: new Date('2021-06-23'),
    //         $lte: new Date('2021-06-24')
    //     }
    // })
    //     .then((data) => {
    //         console.log('DateQuery: ', data);
    //         res.json(data);

    //     })
    //     .catch((error) => {
    //         console.log('error: ', error);

    //     })

// });
