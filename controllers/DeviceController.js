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
  dbConnect.query("SELECT*FROM deviceinfo", (error, results, field) => {
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

///Add a device
const addDevice = (req, res) => {
  var deviceId = req.body.deviceId;
  var deviceName = req.body.deviceName;
  var status = req.body.status;
  var comments = req.body.comments;
  var joinDomain = req.body.joinDomain;
  var model = req.body.model;
  var servicetag_sn = req.body.servicetag_sn;
  var localId = req.body.localId;
  var computername = req.body.computername;
  //////
  var cpus = req.body.cpus;
  var ram = req.body.ram;
  var hardisk = req.body.hardisk;
  var provider = req.body.provider;
  var price = req.body.price;
  var warranty = req.body.warranty;
  var startDate = req.body.startDate;
  var expiredate = req.body.expireDate;
  var remark = req.body.remark;
  var branId = req.body.branId;
  var typeId = req.body.typeId;

  if (!deviceId || !deviceName) {
    return res.send({
      error: true,
      message: "Please provide your device data",
    });
  } else {
    dbConnect.query(
      "INSERT INTO deviceinfo (deviceId,device_name,statuss,comments,joinDomain,model,servicetag_sn,localId,computername,cpus,ram,hardisk,provider,price,warranty,startDate,expireDate,remark,brandId,typeId) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
      [
        deviceId,
        deviceName,
        status,
        comments,
        joinDomain,
        model,
        servicetag_sn,
        localId,
        computername,
        cpus,
        ram,
        hardisk,
        provider,
        price,
        warranty,
        startDate,
        expiredate,
        remark,
        branId,
        typeId,
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

module.exports = { getDeviceData, addDevice };
