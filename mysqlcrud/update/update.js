var db=require("../config/db_connection");
var connection = db.getConnection();
connection.connect();
var express= require("express");
var router=express.Router();
router.post("/",(req,res)=>{
    var p_id=req.body.p_id;
    var p_name=req.body.p_name;//while updating time p_name and p_cost is not mandatory by using id we can update
    var p_cost=req.body.p_cost;
    connection.query("update products set p_name='"+p_name+"',p_cost="+p_cost+" where p_id="+p_id,
    (err,result)=>{
        if(err){
            console.log("error while updating the data")
        }
        else{
            res.send({update :"success"})
        }
    });
});
module.exports=router;






