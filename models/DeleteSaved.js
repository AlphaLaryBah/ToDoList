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
    body: {
        type: String,
        trim: true,
        required: true 
    },
    date: {
        type: String,
        default: day
    }

},
    {
        timestamps: true,
});

//MODEL
const Deleted = mongoose.model('Deleted', todoListSchema);

module.exports = Deleted;