var dbConnect=require('../config/config');


///Retrieve all data position
const retrievePosition=(req,res)=>{
    dbConnect.query('SELECT*FROM positions',(error,results,fields)=>{
        if(error) throw error;

        let message="";
        if(results===undefined || results.length ==0){
            message="Position is empty";
        }else{
            message="Succesfully retrieve position data";
        }
        return res.send({error:false,data:results,message:message});
    });

}


//Add data position



const addPostion=(req,res)=>{
    let position=req.body.position;
    let departmentId=req.body.departmentId;

    if(!position ||! departmentId){
        return res.send({error:true,message:"Please provide your data"});
    }else{
        dbConnect.query("INSERT INTO postions (positionId,position,departmentId) VALUES (?,?,?)",[]);
    }
}


module.exports = { retrievePosition };