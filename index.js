const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');

const app=express();

//connection to mongodb
mongoose.connect("mongodb://localhost:27017/todo_express");

//middleware
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine","ejs");

//routes
app.use(require(__dirname+"/routes/app"));
app.use(require(__dirname+"/routes/todo"));

//Server configuration.
app.listen(3000,function(){
    console.log("Server is running on port 3000");
});
