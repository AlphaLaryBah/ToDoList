const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();
const path = require('path');

const app = express();

const PORT = process.env.PORT || 8080;
////
// const MONGODB_URI =  'mongodb+srv://alpha:Rahim12@todolist.fiyog.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
// process.env.MONGODB_URI
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/todolistDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected !!!');
})

//JSON FOR INCOMING POST DATA to parse
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//ROUTES
const routes = require('./routes/api');

//morgan: is an HTTP request logger, tells us which http we are hitting
app.use(morgan('tiny'));

//CORS
app.use(cors());

//ROUTES
app.use('/api', routes);

if (process.env.NODE_ENV === 'production') {

    app.use(express.static('client/build'));
}
//https://merntasktodolist.herokuapp.com/ | https://git.heroku.com/merntasktodolist.g

app.listen(PORT, () => console.log(` Server is Listening on Port ${PORT}`))