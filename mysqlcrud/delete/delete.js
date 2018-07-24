var db= require("../config/db_connection");
var connection = db.getConnection();
connection.connect();
var express =require("express");
var router=express.Router();
router.post("/",(req,res)=>{
    var p_id = req.body.p_id;
    connection.query("delete from products where p_id="+p_id,
    (err,result)=>{
            if(err){
            console.log("error while delating the data");
        }else{
            res.send({delete:"success"})
        }
    });    
});
module.exports=router;
