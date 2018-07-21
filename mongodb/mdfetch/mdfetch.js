var mongodb=require("mongodb");
var express= require("express")//import express 
var ganeshIT=mongodb.MongoClient;
var router = express.Router(); //create router instance
//create the rest api
router.get("/",(req,res)=>{
   ganeshIT.connect("mongodb://localhost:27017/mongodemo",(err,db) => {
       db.collection("products").find().toArray((err,Array)=>{
    if(err){
            console.error("error while fetching data");
        }else{
            res.send(Array);
        }
    });
   });
});
   module.exports=router;