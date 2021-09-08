const dbConnect=require('../config/config');


const getDataCheckin=(req,res)=>{
    dbConnect.query('SELECT*FROM checkin',(error,results,field)=>{
        if(error) throw error;

        var message='';

        if(results===undefined||results.length==0){

            message='Data checkin not found'
        }else{
            message='Successfully chekin data';
        }
        return res.send({error:false,data:results,message:message});
    });
};

module.exports={getDataCheckin}