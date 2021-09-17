const dbConnect = require("../config/config");

const getDataRepair = (req, res) => {
  dbConnect.query(
    "SELECT*FROM repairs",
    (error, results, field) => {
      if (error) throw error;
      var message = "";
      if (results === undefined || results.length == 0) {
        message = "Repair not found";
      } else {
        message = "Successfully get repair data";
      }
      return res.send({ error: false, data: results, message: message });
    }
  );
};

const getDataRepairDevice = (req, res) => {
  dbConnect.query(
    "select*from repairs inner join deviceinfo on repairs.deviceId=deviceinfo.deviceId inner join devicetype on deviceinfo.typeId=devicetype.typeId inner join brands on deviceinfo.brandId=brands.brandId",
    (error, results, field) => {
      if (error) throw error;
      var message = "";
      if (results === undefined || results.length == 0) {
        message = "Repair not found";
      } else {
        message = "Successfully get repair data";
      }
      return res.send({ error: false, data: results, message: message });
    }
  );
};
const getDataRepairlog = (req, res) => {
  dbConnect.query(
    "SELECT*FROM repairlog",
    (error, results, field) => {
      if (error) throw error;
      var message = "";
      if (results === undefined || results.length == 0) {
        message = "RepairLog not found";
      } else {
        message = "Successfully get repairLog data";
      }
      return res.send({ error: false, data: results, message: message });
    }
  );
};

const addRepair = (req, res) => {
  var repairId = req.body.repairId;
  var employeeId = req.body.employeeId;
  var username = req.body.username;
  var descriptions = req.body.descriptions;
  var deviceId=req.body.deviceId;

  if (!repairId) {
    return res.send({ error: true, message: "Please provide RepairId" });
  } else {
    dbConnect.query(
      "INSERT INTO repairs (repairId,employeeId,username,descriptions,deviceId) VALUES (?,?,?,?,?)",
      [repairId, employeeId, username, descriptions,deviceId],
      (error, results, field) => {
        if (error) throw error;
        return res.send({
          error: false,
          data: results,
          message: "Success Insert Repair",
        });
      }
    );
  }
};




const delRepair = (req, res) => {
  var deviceId=req.body.deviceId;
  if (!deviceId) {
    return res.send({ error: true, message: "Please rovide repair id" });
  } else {
    dbConnect.query(
      "DELETE FROM repairs WHERE deviceId=?",
      [deviceId],
      (error, results, field) => {
        if (error) throw error;
        let message = "";
        if (results.affectedRows == 0) {
          message = "Repair not found or already deleted";
        } else {
          message = "Delete Repair Success";
        }
        return res.send({ error: false, data: results, message: message });
      }
    );
  }
};
// const addRepairDetail=(req,res)=>{
//   var repairId=req.body.repairId;
//   var deviceId=req.body.deviceId;
//   var employeeId=req.body.employeeId;
  

//   if(!repairId){
//     return res.send({error:true,message:'Please input repair ID'});
//   }else{
//     dbConnect.query('INSERT INTO repair_detail (repairId,deviceId,employeeId) VALUES (?,?,?)',[repairId,deviceId,employeeId],(error,results,field)=>{
//       if(error) throw error;
//       return res.send({error:false,data:results,message:'Success Insert repaire detail'});
//     });
//   }
// }

const addRepairLog=(req,res)=>{
  var repairId=req.body.repairId;
  var deviceId=req.body.deviceId;
  var employeeId=req.body.employeeId;
  var descriptions=req.body.descriptions;

  if(!repairId){
    return res.send({ error: true, message: "Please rovide repair id" });
  }else{
    dbConnect.query('INSERT INTO repairlog (repairId,deviceId,employeeId,descriptions) VALUES (?,?,?,?)',[repairId,deviceId,employeeId,descriptions],(error,results,field)=>{
      if(error) throw error;
      return res.send({
        error: false,
        data: results,
        message: "Success Insert RepairLog",
      });

    });
  }
}

const addReceiveLog=(req,res)=>{
  var repairId =req.body.repairId;
  var deviceId =req.body.deviceId;
  var employeeId=req.body.employeeId;
  var descriptions=req.body.descriptions;
   
  if(!repairId){
    return res.send({ error: true, message: "Please rovide repair id" });
  }else{
    dbConnect.query('INSERT INTO receivelog (repairId,deviceId,employeeId,descriptions) VALUES (?,?,?,?)',[repairId,deviceId,employeeId,descriptions],(error,results,field)=>{
      if(error) throw error;
      return res.send({
        error: false,
        data: results,
        message: "Success Insert Receive log",
      });

    });
  }

}

const getReceiveLog = (req, res) => {
  dbConnect.query(
    "SELECT*FROM receivelog",
    (error, results, field) => {
      if (error) throw error;
      var message = "";
      if (results === undefined || results.length == 0) {
        message = "Receive not found";
      } else {
        message = "Successfully get receive data";
      }
      return res.send({ error: false, data: results, message: message });
    }
  );
};


module.exports = { getDataRepair,addRepair,delRepair,addRepairLog,getDataRepairlog,getDataRepairDevice,addReceiveLog,getReceiveLog};
