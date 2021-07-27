var dbConnect = require("../config/config");

///Retrieve all Data
const retrieveDepart = async (req, res) => {
  dbConnect.query("SELECT * FROM departments", (error, results, field) => {
    if (error) throw error;
    let message = "";
    if (results === undefined || results.length == 0) {
      message = "Department is Empty";
    } else {
      message = "Successfully retrive all department";
    }
    return res.send({
      error: false,
      data: results,
      message: message,
    });
  });
};

//Get data by id
const retrieveDataById = (req, res) => {
  let id = req.params.id;
  dbConnect.query(
    "SELECT*FROM departments WHERE departmentId=?",
    [id],
    (error, results, field) => {
      if (error) throw error;
      let message = "";

      if (results === undefined || results.length == 0) {
        message = "Department not found";
      } else {
        message = "Successfully";
      }
      return res.send({ error: false, data: results, message: message });
    }
  );
};

//Add Data
const addDataDepartment = (req, res) => {
  let department = req.body.department;
  let companyId = req.body.companyId;

  if (!department || !companyId) {
    res.send({ error: true, message: "Required data" });
  } else {
    dbConnect.query(
      "INSERT INTO departments (departmentId,department,companyId) values(?,?,?)",
      ["", department, companyId],
      (error, results, field) => {
        if (error) throw error;
        return res.send({
          error: false,
          data: results,
          message: "Successfully added department",
        });
      }
    );
  }
};

//update department
const updateDepartment = (req, res) => {
  let departmentId = req.body.departmentId;
  let department = req.body.department;
  let companyId = req.body.companyId;

  if (!departmentId || !department) {
    return res.send({ error: true, message: "Required data" });
  } else {
    dbConnect.query(
      "UPDATE departments SET department=?,companyId=? WHERE departmentId=?",
      [department, companyId, departmentId],
      (error, results, field) => {
        if (error) throw error;
        let message = "";
        if (results.changedRow == 0) {
          message = "data not found or dupicate data";
        } else {
          message = "Update department successfully";
        }
        return res.send({ error: false, data: results, message: message });
      }
    );
  }
};

//Delete department
const deleteDepartment = (req, res) => {
  let departmentId = req.body.departmentId;

  if (!departmentId) {
    return res.send({ error: true, message: "Required data" });
  } else {
    dbConnect.query(
      "DELETE FROM departments WHERE departmentId=?",
      [departmentId],
      (error, results, field) => {
        if (error) throw error;
        let message = "";

        if (results.affectedRows == 0) {
          message = "Department not found or already deleted";
        } else {
          message = "Delete successfully";
        }
        return res.send({ error: false, data: results, message: message });
      }
    );
  }
};

module.exports = {
  retrieveDepart,
  retrieveDataById,
  addDataDepartment,
  updateDepartment,
  deleteDepartment,
};
