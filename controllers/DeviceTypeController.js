var express=require('express');
var dbConnect=require('../config/config');
///Add data
const addType=(req,res)=>{
    var devicetype = req.body.devicetype;
    if (!devicetype) {
      return res
        .status(400)
        .send({ error: true, message: "Please inpt your device type" });
    } else {
      dbConnect.query(
        "INSERT INTO devicetype (typeId,devicetype) VALUES(?,?)",
        ['', devicetype],
        (error, results, field) => {
          if (error) throw error;
          return res.send({
            error: false,
            data: results,
            message: "Successfully added device type",
          });
        }
      );
    }
}

///Get all data

const getDeviceType=(req,res)=>{
    dbConnect.query("SELECT*FROM deviceType",(error,results,field)=>{
        if(error) throw error;

        let message='';
        if(results===undefined || results.length ==0){
            message="Device type is empty";

        }else{
            message="Successfully get all device typr";
        }
        return res.send({error:false,data:results,message:message});
    });
}

module.exports = { addType, getDeviceType };