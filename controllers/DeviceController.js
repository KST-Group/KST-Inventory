var dbConnect = require("../config/config");
require('dotenv').config();

//Get Device Using
const getDeviceUsing=(req,res)=>{
  dbConnect.query("SELECT*FROM v_employee_using", (error, results, field) => {
    if (error) throw error;
    let message = "";
    if (results === undefined || results.length == 0) {
      message = "Using is empty";
    } else {
      message = "Successful Using data";
    }
    return res.send({ error: false, data: results, message: message });
  });
}



///Get device data
const getDeviceData = (req, res) => {
  dbConnect.query("SELECT*FROM v_devices", (error, results, field) => {
    if (error) throw error;
    let message = "";
    if (results === undefined || results.length == 0) {
      message = "Device is empty";
    } else {
      message = "Successful retrieve your device data";
    }
    return res.send({ error: false, data: results, message: message });
  });
};

///Get Device Dat by Id
const geDeviceDataById=(req,res)=>{
  let deviceId=req.params.deviceId;
  dbConnect.query('SELECT*FROM v_devices WHERE deviceId=?',[deviceId],(error,results,field)=>{
    if(error) throw error;
    let message='';
    if(results===undefined||results.length==0){
      message="Device not found";
    }else{
      message='Succesfull your data by id';
    }
    return res.send({error:false,data:results,message:message});
  });
}

///Add a device
const addDevice = (req, res) => {
  var deviceId = req.body.deviceId;
  var localId = req.body.localId;
  var device_name = req.body.device_name;
  var computername = req.body.computername;
  var comments = req.body.comments;
  var joinDomain = req.body.joinDomain;
  var model = req.body.model;
  var servicetag_sn = req.body.servicetag_sn;
  var provider = req.body.provider;
  
  var typeId = req.body.typeId;
  var brandId = req.body.brandId;
  var cpus = req.body.cpus;
  var ram = req.body.ram;
  var hardisk = req.body.hardisk;
  var price = req.body.price;
  var warranty = req.body.warranty;
  var remark = req.body.remark;

  if (!deviceId || !device_name) {
    return res.send({
      error: true,
      message: "Please provide your device data",
    });
  } else {
    dbConnect.query(
      "INSERT INTO deviceinfo (deviceId,localId,device_name,computername,comments,joinDomain,model,servicetag_sn,provider,typeId,brandId,cpus,ram,hardisk,price,warranty,remark,statuss) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
      [
        deviceId,
        localId,
        device_name,
        computername,
        comments,
        joinDomain,
        model,
        servicetag_sn,
        provider,
        typeId,
        brandId,
        cpus,
        ram,
        hardisk,
        price,
        warranty,
        remark,'In Stock'
      ],
      (error, results, field) => {
        if (error) throw error;
        return res.send({
          error: false,
          data: results,
          message: "Success added Device",
        });
      }
    );
  }
};

///Delete
const deleteDevice=(req,res)=>{
  let deviceId=req.body.deviceId;

  if(!deviceId){
    res.send({error:true,message:'Please provide your device id for delete'});
  }else{
    dbConnect.query('DELETE FROM deviceinfo WHERE deviceId=?',[deviceId],(error,results,field)=>{
      if(error) throw error;
      let message='';

      if(results.affectedRows===0){
        message = "Device not found or already deleted";
      }else{
        message = "Delete Device Success";
      }
      return res.send({ error: false, data: results, message: message });

    })
  }
}




module.exports = { getDeviceData, addDevice,geDeviceDataById,deleteDevice,getDeviceUsing };
