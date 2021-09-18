var express = require("express");
var bodyParser = require("body-parser");
var users = require("./routes/users");
require('dotenv').config();
const cors=require('cors');
const app = express();
app.use(cors());  

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var company = require("./routes/company");
var deparRouter = require("./routes/department");
var positionRouter = require("./routes/position");
var loginRouter = require("./routes/login");
var devicetypeRouter = require("./routes/devicetype");
var brandRouter = require("./routes/brands");
var deviceInfo = require("./routes/device_info");
const employeeRouter = require("./routes/employee");
const checkoutRouter=require('./routes/checkout');
const checkInRouter=require('./routes/checkin');

const orderRouter=require('./routes/order');

const repairRouter=require('./routes/repairs');

const reportRoute=require('./routes/reports');




app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept"
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
    Organization:"KST"
  });
});

//Set route
app.use("/login", loginRouter);
app.use("/users", users);
app.use("/company", company);
app.use("/department", deparRouter);
app.use("/position", positionRouter);
app.use("/devicetype", devicetypeRouter);
app.use("/brands", brandRouter);

app.use("/devices", deviceInfo);
app.use("/employee", employeeRouter);
app.use('/checkout',checkoutRouter);

app.use('/checkin',checkInRouter);

app.use('/order',orderRouter);

app.use('/repairs',repairRouter);

app.use('/reports',reportRoute);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Express server is running on port ${port}`);
});
