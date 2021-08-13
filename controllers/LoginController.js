var dbConnect=require('../config/config');

const login=(req,res)=>{
    var username=req.body.username;
    var passwords=req.body.passwords;

    if(!username || !passwords){
        return res.status(500).send({error:true,message:"Username or Password is empty"});
    }else{
        dbConnect.query("SELECT*FROM users WHERE username=? AND passwords=?",[username,passwords],(error,results,field)=>{
            if(error) throw error;
            let message='';
            let status=false;
            if(results===undefined || results.length ==0){
                message="Username or Password Invalid";
                status = true;
            }else{
                message="Login Success";
                
            }
            return res.send({ error: status, data: results, message: message });
        });
    }
}

module.exports = login;