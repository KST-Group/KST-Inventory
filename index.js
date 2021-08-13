var express = require("express");
var bodyParser = require("body-parser");
var users = require("./routes/users");

var company = require("./routes/company");
var deparRouter = require("./routes/department");
var positionRouter = require("./routes/position");
var loginRouter = require("./routes/login");
var devicetypeRouter = require("./routes/devicetype");
var brandRouter = require("./routes/brands");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,PATH,DELETE");
    return res.status(200).json({});
  }

  next();
});

app.get("/", (req, res) => {
  res.send({
    error: false,
    message: "Welcome to KST Inventory API",
    written_by: "Nanthavath",
  });
});

//Set route
app.use("/login", loginRouter);
app.use("/users", users);
app.use("/company", company);
app.use("/deparment", deparRouter);
app.use("/position", positionRouter);
app.use("/devicetype", devicetypeRouter);
app.use("/brands", brandRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Express server is running on port ${port}`);
});
