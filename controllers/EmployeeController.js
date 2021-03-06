var dbConnect = require("../config/config");
///Get data
const getData = (req, res) => {
  dbConnect.query("SELECT*FROM v_employee", (error, results, field) => {
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
const getEmpData = (req, res) => {
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
const addDataEmployee = (req, res) => {
  let employeeId = req.body.employeeId;
  let gender = req.body.gender;
  let name_la = req.body.name_la;
  let name_en = req.body.name_en;
  let nickname = req.body.nickname;
  let email = req.body.email;
  let departmentId = req.body.departmentId;
  let positionId = req.body.positionId;
  let companyId = req.body.companyId;

  if (!employeeId) {
    return res.send({
      error: true,
      message: "Please provide your employee ID",
    });
  } else {
    dbConnect.query(
      "INSERT INTO employee (employeeId,gender,name_la,name_en,nickname,email,positionId,departmentId,companyId) VALUES (?,?,?,?,?,?,?,?,?)",
      [
        employeeId,
        gender,
        name_la,
        name_en,
        nickname,
        email,
        positionId,
        departmentId,
        companyId,
      ],
      (error, results, field) => {
        if (error) throw error;
        return res.send({
          error: false,
          data: results,
          message: "Successfully added your employee data",
        });
      }
    );
  }
};

///Delete
const deleteEmployee = (req, res) => {
  let employeeId = req.body.employeeId;
  if (!employeeId) {
    return res.send({ error: true, message: "Please provide employee ID" });
  } else {
    dbConnect.query(
      "DELETE FROM employee WHERE employeeId=?",
      [employeeId],
      (error, results, field) => {
        if (error) throw error;
        let message = "";
        if (results.affectedRows == 0) {
          message = "Employee not found or already deleted";
        } else {
          message = "Succesfully deleted employee";
        }
        return res.send({ error: false, data: results, message: message });
      }
    );
  }
};

//Get Data Employee with device
const getEmployeeWithDevice = (req, res) => {
  dbConnect.query("SELECT*FROM v_empoyees", (error, results, field) => {
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

///Get employee with using device
const getEmployeeUsingDevice = (req, res) => {
  dbConnect.query("SELECT*FROM v_employee_device", (error, results, field) => {
    if (error) throw error;

    let message = "";
    if (results === undefined || results.length == 0) {
      message = "Employee type is empty";
    } else {
      message = "Successfully get all EMployee";
    }
    return res.send({ error: false, data: results, message: message });
  });
  ///
  // dbConnect("SELECT*FROM v_employee_device",(error,results,field)=>{
  //   if(error) throw error;
  //   var message='';
  //   if(results===undefined||results.length==0){
  //     message="Not found";
  //   }else{
  //     message='Successfull';
  //   }
  //   return res.send({error:false,data:results,message:message});
  // });
};

///Update
const updateEmployee = (req, res) => {
  let employeeId = req.body.employeeId;
  let gender = req.body.gender;
  let name_la = req.body.name_la;
  let name_en = req.body.name_en;
  let nickname = req.body.nickname;
  let email = req.body.email;
  let departmentId = req.body.departmentId;
  let positionId = req.body.positionId;
  let companyId = req.body.companyId;
  if (!employeeId) {
    return res.send({
      error: true,
      message: "Please provide your employee ID",
    });
  } else {
    dbConnect.query(
      "UPDATE employee SET gender=?,name_la=?,name_en=?,nickname=?,email=?,positionId=?,departmentId=?,companyId=? WHERE employeeId=?",
      [
        gender,
        name_la,
        name_en,
        nickname,
        email,
        positionId,
        departmentId,
        companyId,
        employeeId,
      ],
      (error, results, field) => {
        if (error) throw error;
        return res.send({
          error: false,
          data: results,
          message: "Successfully Update your employee data",
        });
      }
    );
  }
};

///get employee by device
const getEmployeeByDevice = (req, res) => {
  var deviceId = req.params.deviceId;
  dbConnect.query(
    "select*from checkout join checkoutdetail on checkout.checkoutId=checkoutdetail.checkoutId where deviceId=?",
    [deviceId],
    (error, results, field) => {
      if (error) throw error;
      let message = "";
      if (results === undefined || results.length == 0) {
        message = "Employee Device type is empty";
      } else {
        message = "Successfully get all EMployee devoice";
      }
      return res.send({ error: false, data: results, message: message });
    }
  );
};
module.exports = {
  getData,
  addDataEmployee,
  deleteEmployee,
  getEmployeeWithDevice,
  getEmployeeUsingDevice,
  getEmpData,
  updateEmployee,getEmployeeByDevice
};
