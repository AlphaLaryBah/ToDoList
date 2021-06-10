const mongoose = require('mongoose')


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


module.exports = whatTodo;