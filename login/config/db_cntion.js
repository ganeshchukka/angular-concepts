var obj = require("./db_propertiess");
var mysql=require("mysql");
module.exports={
    getConnection:()=>{
        return mysql.createConnection(obj);
    }
};
