var db= require ("../config/db_connection");
var connection = db.getConnection();
connection.connect();
var express = require("express");
var router = express.Router();
//create the rest api
router.post("/",(req,res)=>{
    var p_id = req.body.p_id;
    var p_name = req.body.p_name;
    var p_cost = req.body.p_cost;
    connection.query("insert into products values("+p_id+",'"+p_name+"',"+p_cost+")",
    (err,result)=>{
        if(err){
            console.log("error while inserting the data");
        }
        else{
            res.send({insert:"success"})
        }
    });
});
module.exports=router;
