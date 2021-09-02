var mysql = require("mysql");

const dbConnect = mysql.createConnection({
  host: "us-cdbr-east-04.cleardb.com",
  user: "bcb3d073debb7f",
  password: "d73be5fc",
  database: "heroku_410c75dc03f7218",
  
});
dbConnect.connect();

module.exports=dbConnect;
