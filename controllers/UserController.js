var express=require('express');
var dbConnect=require('../config/config');
const User=require('../models/UserModel')



const getUser = async (req, res) => {
    dbConnect.query("SELECT*FROM users", (error, results, field) => {
      if (error) throw error;
      let message = "";
      if (results === undefined || results.length == 0) {
        message = "User is Empty";
      } else {
        message = "Successfully retrive all user";
      }
      return res.send({
        error: false,
        data: results,
        message: message,
      });
    });
};

const addUser = (req,res)=>{
    let username = req.body.username;
    let passwords = req.body.passwords;
    let surname = req.body.surname;

    if (!username || !passwords) {
      return res.status(400).send({
        error: true,
        message: "Please provide username and password",
      });
    } else {
      dbConnect.query(
        "INSERT INTO users (username,passwords,surname)  values (?,?,?)",
        [username, passwords, surname],
        (error, results, field) => {
          if (error) throw error;
          return res.send({
            error: false,
            data: results,
            message: "User successfully added",
          });
        }
      );
    }
 }

module.exports = { getUser, addUser };