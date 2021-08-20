var mysql = require("mysql");

const dbConnect = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "kst_inventory",
});
dbConnect.connect();

module.exports=dbConnect;
