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

const routes = require('./routes/api')
mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected !!!');
})


//morgan: is an HTTP request logger, tells us which http we are hitting
app.use(morgan('tiny'));






app.use('/api', routes);

app.listen(PORT, () => console.log(` Server is Listening on Port ${PORT}`))