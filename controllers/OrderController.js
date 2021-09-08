const dbConnect = require("../config/config");

///add Order
const createOrder = (req, res) => {
  var orderId = req.body.orderId;
  var provider = req.body.provider;
  var username = req.body.username;

  if (!orderId) {
    return res.send({ error: true, message: "Please privide order ID" });
  } else {
    dbConnect.query(
      "INSERT INTO orders (orderId,provider,username) VALUES (?,?,?)",
      [orderId, provider, username],
      (error, results, field) => {
        if (error) throw error;

        var message = "";
        if (results.affectedRows === 0) {
          message = "Create Order Failed";
        } else {
          message = "Create order successfully";
        }
        return res.send({ error: false, data: results, message: message });
      }
    );
  }
};

///Add OrderDtail
const addOrder = (req, res) => {
  var orderId = req.body.orderId;
  var deviceId = req.body.deviceId;
  var price = req.body.price;
  var amount = req.body.amount;
  if (!orderId) {
    res.send({ error: true, message: "Please privide orderId" });
  } else {
    dbConnect.query(
      "INSERT INTO orderdetail (orderId,deviceId,price,amount) VALUES(?,?,?,?)",
      [orderId, deviceId, price, amount],
      (error, results, field) => {
        if (error) throw error;

        var message = "";
        if (results.affectedRows === 0) {
          message = "Add Device to order has failed";
        } else {
          message = "Successfully added device to order";
        }
        return res.send({ error: false, data: results, message: message });
      }
    );
  }
};

const getOrder = (req, res) => {
  dbConnect.query("SELECT*FROM orders", (error, results, field) => {
    if (error) throw error;
    let message = "";
    if (results === undefined || results.length == 0) {
      message = "Order data is empty";
    } else {
      message = "Successfully retrieve Order data";
    }
    return res.send({ error: false, data: results, message: message });
  });
};

module.exports = { createOrder, getOrder,addOrder};
