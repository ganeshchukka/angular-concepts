// var express= require("express");
// var bodyparser = require("body-parser");//send the MIME type
// var lapp=express();//create The Rest Object "app" object used to create the rest API
// //Enable The CORS-->means to provide the communicton between ports
// //Enable the CORS
// lapp.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });
// //set the JSON As MIME Type
// lapp.use(bodyparser.json());
// lapp.use(bodyparser.urlencoded({extended:false})); //frond end not sending data from the data to node server
// var login= require("./login/login");
// lapp.use("/login",login);
// //port number assigned
// lapp.listen(8088);
// console.log("server listing the port number");
