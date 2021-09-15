const { json } = require("body-parser");
var dbConnect = require("../config/config");
//select checkout.checkoutId,username,employeeId,deviceId,checkOutDate  from checkout join checkoutdetail on checkout.checkoutId=checkoutdetail.checkoutId
///Get All data
const getCheckOutData = (req, res) => {
  dbConnect.query("SELECT*FROM checkout", (error, results, field) => {
    if (error) throw error;
    let message = "";
    if (results === undefined || results.length == 0) {
      message = "Checkout data is empty";
    } else {
      message = "Successfully retrieve checkout data";
    }
    return res.send({ error: false, data: results, message: message });
  });
};

//Create Checkout
const createCheckOut = (req, res) => {
  var checkoutId = req.body.checkoutId;
  var username = req.body.username;
  var employeeId = req.body.employeeId;

  if (!checkoutId) {
    return res.send({ error: true, message: "Please provide checkout ID" });
  } else {
    dbConnect.query(
      "INSERT INTO checkout  (checkoutId,username,employeeId) VALUES (?,?,?) ",
      [checkoutId, username, employeeId],
      (error, results, field) => {
        if (error) throw error;
        let message = "";
        if (results.affectedRows == 0) {
          message = "Create checkout error";
        } else {
          message = "Create checkout successfully";
        }

        return res.send({
          error: false,
          data: results,
          message: message,
        });
      }
    );
  }
};

//CheckOut Detail
const createCheckOutDetail = (req, res) => {
  var checkoutId = req.body.checkoutId;
  var deviceId = req.body.deviceId;
  dbConnect.query(
    "INSERT INTO checkoutdetail (checkoutId,deviceId) VALUES (?,?)",
    [checkoutId, deviceId],
    (error, results, field) => {
      if (error) throw error;
      return res.send({ error: false, data: results, message: "success" });
    }
  );
};
///Update date device status
const updateStatus = (req, res) => {
  var deviceId = req.body.deviceId;
  var status = "In use";

  dbConnect.query(
    "UPDATE deviceinfo set statuss=? WHERE deviceId=?",
    [status, deviceId],
    (error, results, field) => {
      if (error) throw error;
      return res.send({
        error: false,
        data: results,
        message: "Update device status successully",
      });
    }
  );
};

//Add Log
const addCheckOutLog = (req, res) => {
  var checkoutId = req.body.checkoutId;
  var deviceId = req.body.deviceId;
  var employeeId = req.body.employeeId;

  if (!checkoutId || !deviceId) {
    return res.send({
      error: true,
      message: "Please provide checkout ID for log",
    });
  } else {
    dbConnect.query(
      "INSERT INTO checkoutlog (checkoutId,deviceId,employeeId) VALUES (?,?,?)",
      [checkoutId, deviceId, employeeId],
      (error, results, field) => {
        if (error) throw error;
        let message = "";
        if (results.affectedRows == 0) {
          message = "Create checkout Log error";
        } else {
          message = "Create checkout log successfully";
        }

        return res.send({
          error: false,
          data: results,
          message: message,
        });
      }
    );
  }
};

const getCheckOutLog = (req, res) => {
  dbConnect.query("SELECT*FROM checkoutlog", (error, results, field) => {
    if (error) throw error;
    let message = "";
    if (results === undefined || results.length == 0) {
      message = "Checkout log data is empty";
    } else {
      message = "Successfully retrieve checkout log data";
    }
    return res.send({ error: false, data: results, message: message });
  });
};

///delete checkout detail
const delDetail = (req, res) => {
  var deviceId = req.body.deviceId;
  if (!deviceId) {
    return res.send({ error: true, message: "Please provide id" });
  } else {
    dbConnect.query(
      "DELETE FROM checkoutdetail WHERE deviceId=?",
      [deviceId],
      (error, results) => {
        if (error) throw error;
        let message = "";
        if (results.affectedRows == 0) {
          message = "Checkout detail not found or already deleted";
        } else {
          message = "Delete Detail Success";
        }
        return res.send({ error: false, data: results, message: message });
      }
    );
  }
};

const delCheckout = (req, res) => {
  var checkoutId = req.body.checkoutId;
  if (!checkoutId) {
    return res.send({ error: true, message: "Please provide id" });
  } else {
    dbConnect.query(
      "DELETE FROM checkout WHERE checkoutId=?",
      [checkoutId],
      (error, results) => {
        if (error) throw error;
        let message = "";
        if (results.affectedRows == 0) {
          message = "Checkout  not found or already deleted";
        } else {
          message = "Delete checkout Success";
        }
        return res.send({ error: false, data: results, message: message });
      }
    );
  }
};

module.exports = {
  createCheckOut,
  getCheckOutData,
  createCheckOutDetail,
  updateStatus,
  addCheckOutLog,
  getCheckOutLog,
  delDetail,
  delCheckout,
};
