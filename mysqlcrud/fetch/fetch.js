var db = require("../config/db_connection");//import db connection
var connection =db.getConnection();//get the connection object
connection.connect();//connect to db
var express= require("express")//import express 
var router = express.Router(); //create router instance
//create the rest api
router.get("/",(req,res)=>{
    connection.query("select * from products",(err,recordArray,fields)=>{
        if(err){
            console.error("error while fetching data");
        }else{
            res.send(recordArray);
        }
    });
   });
   module.exports=router;//export the module use to   
