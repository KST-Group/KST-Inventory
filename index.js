var express = require('express');
var bodyParser=require('body-parser');
var users = require('./routes/users');

var company=require('./routes/company');
var deparRouter=require('./routes/department');
var positionRouter=require('./routes/position');
var loginRouter=require('./routes/login');

const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res) => {
  res.send({
    error: false,
    message: "Welcome to KST Inventory API",
    written_by: "Nanthavath",
  });
});

//Set route
app.use("/login", loginRouter);
app.use('/users',users);

app.use('/company',company);
app.use('/deparment',deparRouter);
app.use('/position',positionRouter);

const port=process.env.PORT||5000;
app.listen(port, () => {
  console.log(`Express server is running on port ${port}`);
});