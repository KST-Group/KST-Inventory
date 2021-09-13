const dbConnect = require("../config/config");

const getDataCheckin = (req, res) => {
  dbConnect.query("SELECT*FROM checkin", (error, results, field) => {
    if (error) throw error;

    var message = "";

    if (results === undefined || results.length == 0) {
      message = "Data checkin not found";
    } else {
      message = "Successfully chekin data";
    }
    return res.send({ error: false, data: results, message: message });
  });
};
///Add Check In 
const addCheckIn = (req, res) => {
  var checkinId = req.body.checkinId;
  var username = req.body.username;
  var employeeId = req.body.employeeId;

  if (!checkinId) {
    return res.send({ error: true, message: "Please provide checkinId" });
  } else {
    dbConnect.query(
      "INSERT INTO checkin (checkinId,username,employeeId) VALUES (?,?,?)",
      [checkinId, username, employeeId],
      (error, results, field) => {
        if (error) throw error;

        return res.send({
          error: false,
          data: results,
          message: "Successfully add checkin device",
        });
      }
    );
  }
};

///Get CheckIn Detail
const getDataCheckinDetail = (req, res) => {
    dbConnect.query("SELECT*FROM checkindetail", (error, results, field) => {
      if (error) throw error;
  
      var message = "";
  
      if (results === undefined || results.length == 0) {
        message = "Data checkindeatl not found";
      } else {
        message = "Successfully chekindeatil data";
      }
      return res.send({ error: false, data: results, message: message });
    });
  };

//Check In detail
const addCheckInDtail = (req, res) => {
    var checkinId = req.body.checkinId;
   var deviceId=req.body.deviceId;
    
  
    if (!checkinId) {
      return res.send({ error: true, message: "Please provide checkinId" });
    } else {
      dbConnect.query(
        "INSERT INTO checkindetail (checkinId,deviceId) VALUES (?,?)",
        [checkinId, deviceId],
        (error, results, field) => {
          if (error) throw error;
  
          return res.send({
            error: false,
            data: results,
            message: "Successfully add checkindetail device",
          });
        }
      );
    }
  };

  const checkinView=(req,res)=>{
    dbConnect.query("SELECT*FROM v_checkin", (error, results, field) => {
      if (error) throw error;
  
      var message = "";
  
      if (results === undefined || results.length == 0) {
        message = "Data checkin not found";
      } else {
        message = "Successfully chekin data";
      }
      return res.send({ error: false, data: results, message: message });
    });
  };
module.exports = { getDataCheckin,addCheckIn,getDataCheckinDetail,addCheckInDtail,checkinView };
