const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');


const app = express();
const PORT = process.env.PORT || 8080;
const MONGODB_URI = 'mongodb+srv://alpha:Rahim12@todolist.fiyog.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(MONGODB_URI || "mongodb://localhost:27017/todolistDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected !!!');
})


//morgan: is an HTTP request logger, tells us which http we are hitting
app.use(morgan('tiny'));

let today = new Date();
let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    hour: "numeric",
    minute: "numeric"
};
let day = today.toLocaleDateString("en-US", options);


//SCHEMA
const Schema = mongoose.Schema;

const todoListSchema = new Schema({
    body: String,
    date: {
        type: String,
        default: day
    }

});

//MODEL
const whatTodo = mongoose.model('whatTodo', todoListSchema);

//SAVING DATA TO MONGO DATABASE
const data = {
    body: " take salt pills"
}

//.SAVE() TO SAVE THE DATA TO MONGO

const newTodoList = new whatTodo(data);
newTodoList.save((error) => {
    if (error) {
        console.log("OOOps, something went wrong");
    } else {
        console.log("Data has been saved");
    }

});

app.get("/api", (req, res) => {

    whatTodo.find({})
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);

        })
        .catch((error) => {
            console.log('error: ', error);

        });





});
app.get("/api/name", (req, res) => {
    const data = {
        username: "Maimouna",
        age: 33

    };
    res.json(data);
});
// app.get("/", (req, res) => res.send('Hello world'));
// app.get("/greet", (req, res) => res.send('Hello world now we are all here'));

app.listen(PORT, () => console.log(` Server is Listening on Port ${PORT}`))