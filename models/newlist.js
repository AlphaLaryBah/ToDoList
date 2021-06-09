const mongoose= require('mongoose')


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

// const newTodoList = new whatTodo(data);


// newTodoList.save((error) => {
//     if (error) {
//         console.log("OOOps, something went wrong");
//     } else {
//         console.log("Data has been saved");
//     }

// });
module.exports = whatTodo;