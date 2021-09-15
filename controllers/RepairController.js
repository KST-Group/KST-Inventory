const dbConnect = require("../config/config");

const getDataRepair = (req, res) => {
  dbConnect.query(
    "SELECT*FROM repairs join repair_detail",
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

const addRepair=(req,res)=>{
    
}

module.exports = { getDataRepair };
