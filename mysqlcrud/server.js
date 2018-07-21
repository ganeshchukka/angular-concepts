var express= require ("express");
var express= require ("mongodb");
var fs = require("fs");
                    //where "fs" module used to interact with the flat files.       
                    //no need tp download "fs" module by using either "yarn" or "npm"
                    //"fs" module is the native module.
var bodyparser = require("body-parser");//send the MIME type
var app=express();//create The Rest Object "app" object used to create the rest API
//Enable The CORS-->means to provide the communicton between ports
//Enable the CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

//set the JSON As MIME Type
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false})); //frond end not sending data from the data to node server
var fetch=require("./fetch/fetch");
app.use("/fetch",fetch);
var insert= require("./insert/insert");
app.use("/insert",insert);
var update =require("./update/update");
app.use("/update",update);
var remove = require("./delete/delete");
app.use("/delete",remove);

//create the Rest API
app.get("/products",(req,res)=>{
    fs.readFile("../static/static.json",(err,data)=>{
        res.send(data);
    });
});
var login= require("../login/login/login");
app.use("/login",login);

// mongo db 
var mfetch=require("../mongodb/mdfetch/mdfetch");
app.use("/fetch",mfetch);
// var minsert=require("../mongodb/insert/insert');
// app.use('/insert',minsert);
//port number assigned
app.listen(8080);
console.log("server listing the port number");







  
