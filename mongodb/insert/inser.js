var express=require("express");
var mongodb=require("mongodb");
var chukka=mongodb.MongoClient;
var router =express.Router();
router.post("/", function (req,res) {
    var p_id=req.body.p_id;
    var p_name=req.body.p_name;
    var p_cost=req.body.p_costs;
    chukka.connect("mogngodb://localhost:27017/mongodemo",(err,db)=>{
        db.collection("products").insertOne("p_id"=p_id,"p_name"=p_name,"p_cost"=p_cost,function(err,res){
            if(err){
                console.error("error while fetching data");
            }else{
                res.send(products);
            }
        });
    });
})
