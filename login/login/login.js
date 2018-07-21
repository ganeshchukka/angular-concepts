var conn = require("../config/db_cntion");//import db connection
var connection =conn.getConnection();//get the connection object
var g_token=require("../token/genrateToken");
connection.connect();//connect to db
var express= require("express")//import express 
var router = express.Router(); //create router instance
//create the rest api
router.post("/",(req,res)=>{
    var uname=req.body.uname;
    var upwd=req.body,upwd;
    connection.query("select * from login_details where uname='"+uname+"' and upwd='"+upwd+"'" ,
    (err,recordsArray,fields)=>{
        if(recordsArray.length>0){
            var my_token=g_token(uname,upwd,'hr@chukka.com');
            res.send({login:"success",token:my_token});
                    }else{
            res.send({login:"fail"});
        }
    });
   });
   module.exports=router;//export the module use to   
