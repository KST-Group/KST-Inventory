const dbConnect = require("../config/config");

const getDeviceReport = (req, res) => {
  dbConnect.query(
    "select*from deviceinfo inner join devicetype on deviceinfo.typeId=devicetype.typeId inner join brands on deviceinfo.brandId=brands.brandId",
    (error, results, field) => {
      if (error) throw error;
      var message = "";
      if (results === undefined || results.lenght == 0) {
        message = "Device not found";
      } else {
        message = "Successfully device report";
      }
      return res.send({ error: false, data: results, message: message });
    }
  );
};

module.exports = { getDeviceReport };
