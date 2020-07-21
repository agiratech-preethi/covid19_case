const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require('mongoose');
const ShemaCase = require('./models/case.model');
const app = express();
const csvFilePath = './cases/cases.csv'
const csv = require('csvtojson');
const upload = require("express-fileupload");

// If you want to upload the CSV files into MONGODB, uncommand the code and run it.
// Check the collection in table.


// Allow headers
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: PUT,GET,POST,DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyparser.json());
app.use(express.urlencoded({ extended: false }));
app.use(upload());

// mongodb connection
mongoose.connect("mongodb+srv://tamilnadu_case:covid2019@cluster0.xccya.mongodb.net/cases?retryWrites=true&w=majority", {
    keepAlive: true,
    keepAliveInitialDelay: 300000,
    socketTimeoutMS: 2000000,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}).then(data => console.log('db connected')).catch(err => console.log('db error', err))

// call for home page
app.get('/home', function (req, res) {
    res.sendFile(__dirname + "/" + "home.html");
});

const routes = require('./routes/route.route');
app.use('/api', routes);
module.exports = app;