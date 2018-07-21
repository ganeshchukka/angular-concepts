var jwt=require("jwt-simple");
module.exports=function(uname,upwd,pasword){
return jwt.module({'uname':uname,'upwd':upwd,password});
};