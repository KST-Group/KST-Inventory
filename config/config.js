var mysql = require("mysql");
require('dotenv').config();

const dbConnect = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  
});
dbConnect.connect();

module.exports=dbConnect;
