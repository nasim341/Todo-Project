 //Basic
 const express = require('express');
 const router = require("./src/routes/api");
 const app = new express();
 const bodyParser = require("body-parser");

 //Security Middleware Lib Import
 const ratelimit = require("express-rate-limit")
 const helmet = require('helmet')
 const mongoSanitize = require('express-mongo-sanitize')
 const cors = require('cors')
 const multer = require('multer')
 const hpp = require('hpp')
 const xss = require('xss-clean')


 //Database Middleware Lib Import
 const mongoose = require('mongoose');

 //Security Middleware implement
 app.use(cors())
 app.use(helmet())
 app.use(hpp())
 app.use(xss())
 app.use(bodyParser.json())

 //Request Rate Limit
 const limiter = ratelimit({ windows: 15 * 60 * 1000 * 3000, max: 100 });
 app.use(limiter);

 //Mongo DB Connected 
 let URI = "mongodb://localhost:27017/ToDo";
 let OPTION = { user: "", pass: "", autoIndex: true };
 mongoose.connect(URI, OPTION, (error) => {
     console.log("Database Connected");
     console.log(error);
 })


 //Routing Implement
 app.use("/api/v1", router);

 //Undefind Route Implement
 app.use('*', (req, res) => {
     res.status(404).json({ status: "fail", data: "NOt Found" })
 })

 module.exports = app;