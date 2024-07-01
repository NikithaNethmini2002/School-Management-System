//pacakages are imported for variables and these variables are used when funcrtions are called
//common for any app
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors =  require("cors");
const dotenv = require("dotenv");
const app =  express();
require("dotenv").config();

//variable declaration for port
const PORT = process.env.PORT || 8070;

nikitha
//making use of app variable
app.use(cors());
app.use(bodyParser.json());//making use of key value pairs in json

//connection of database
const URL = process.env.MONGODB_URL;

//configurations in database
mongoose.connect(URL,{
   
    useNewUrlParser:true,
    useUnifiedTopology: true
   
});

//connection definition(open)
const connection = mongoose.connection;
connection.once("open",()=>{
    console.log("Mongodb Connection success!");
})

//accessing student.js by importing
const studentRouter = require("./routes/students.js");

//calling a backend URL
app.use("/student",studentRouter);



//running in 8070 port
app.listen(PORT,()=>{
    console.log(`Server is up and running on port number: ${PORT}`)
})



