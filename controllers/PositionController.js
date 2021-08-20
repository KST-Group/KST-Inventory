var dbConnect = require("../config/config");

///Retrieve all data position
const retrievePosition = (req, res) => {
  dbConnect.query("SELECT*FROM positions", (error, results, fields) => {
    if (error) throw error;

    let message = "";
    if (results === undefined || results.length == 0) {
      message = "Position is empty";
    } else {
      message = "Succesfully retrieve position data";
    }
    return res.send({ error: false, data: results, message: message });
  });
};

//Add data position
const addPostion = (req, res) => {
  let position = req.body.position;
  let departmentId = req.body.departmentId;
  let description = req.body.description;

  if (!position) {
    return res.send({ error: true, message: "Please provide your data" });
  } else {
    dbConnect.query(
      "INSERT INTO positions (positionId,position,departmentId,description) VALUES (?,?,?,?)",
      ["", position, departmentId, description],
      (error, results, field) => {
        if (error) throw error;
        return res.send({
          error: false,
          data: results,
          message: "Successfully added your position",
        });
      }
    );
  }
};

///Delete
const deletePosition = (req, res) => {
  let positionId = req.body.positionId;
  if (!positionId) {
    return res.send({ error: true, message: "Please provide your Position" });
  } else {
    dbConnect.query(
      "DELETE FROM positions WHERE positionId=?",
      [positionId],
      (error, results, field) => {
        if (error) throw error;
        let message = "";
        if (results.affectedRows == 0) {
          messgae = "Position not found or already deleted";
        } else {
          message = "Delete position successfuly";
        }
        return res.send({ error: false, data: results, message: message });
      }
    );
  }
};

module.exports = { retrievePosition, addPostion, deletePosition };
