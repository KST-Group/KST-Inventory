var dbConnect = require("../config/config");
var Device = require("../models/DeviceModel");

///Get all device
// module.exports.getDevice = async (req, res,next) => {
//  try{
//      const [data] = await Device.getData();
//      res.status(200).json(data);
//  }catch(error){
//       if (!err.statusCode) {
//         err.statusCode = 500;
//       }
//       next(err);

//  }

//};

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
        remark,'Empty'
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

module.exports = { getDeviceData, addDevice,geDeviceDataById };
