var dbConnect = require("../config/config");
///Get data
const getData = (req, res) => {
  dbConnect.query("SELECT*FROM employee", (error, results, field) => {
    if (error) throw error;

    let message = "";
    if (results === undefined || results.length == 0) {
      message = "Employee type is empty";
    } else {
      message = "Successfully get all EMployee";
    }
    return res.send({ error: false, data: results, message: message });
  });
};


//Add data
const addDataEmployee=(req,res)=>{
    let employeeId=req.body.employeeId;
    let gender=req.body.gender;
    let name_la=req.body.name_la;
    let name_en=req.body.name_en;
    

}

module.exports = { getData };