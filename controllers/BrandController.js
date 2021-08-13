var dbConnect = require("../config/config");

///Get all data
const getAllBrand = async (req, res) => {
  dbConnect.query("SELECT * FROM brands", (error, results, field) => {
    if (error) throw error;
    let message = "";
    if (results === undefined || results.length == 0) {
      message = "Brand is Empty";
    } else {
      message = "Successfully retrive all brand";
    }
    return res.send({
      error: false,
      data: results,
      message: message,
    });
  });
};

///Add Brand Data
const addBrand = (req, res) => {
  var brand = req.body.brand;

  if (!brand) {
    return res.send({ error: true, message: "Please provide your brand data" });
  } else {
    dbConnect.query(
      "INSERT INTO brands (brandId,brand) VALUES (?,?)",['', brand],
      (error, results, field) => {
        if (error) throw error;
        return res.send({
          error: false,
          data: results,
          message: "Successful added your brand data",
        });
      }
    );
  }
};

module.exports = { getAllBrand, addBrand };
