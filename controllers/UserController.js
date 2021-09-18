var express = require("express");
var dbConnect = require("../config/config");
const User = require("../models/UserModel");

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

const addUser = (req, res) => {
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
};

//Get User data by username
const getUserbyId = (req, res) => {
  id = req.params.id;
  dbConnect.query(
    "SELECT*FROM users WHERE username=?",
    [id],
    (error, results, fiels) => {
      if (error) throw error;
      let message = "";
      if (results == undefined || results.length == 0) {
        message = "User not found";
      } else {
        message = "Success get your data";
      }
      return res.send({ error: false, data: results, message: message });
    }
  );
};

///Delete User
const deleteUser = (req, res) => {
  let username = req.params.username;
  dbConnect.query(
    "DELETE FROM users WHERE username=?",
    [username],
    (error, results, field) => {
      if (error) throw error;
      let message = "";
      if (results.affectedRows == 0) {
        message = "User not found or alrealdy deleted";
      } else {
        message = "Delete user successfully";
      }
      return res.send({ error: false, data: results, message: message });
    }
  );
};

///Update user
const updateUser=(req,res)=>{
  var username=req.body.username;
  var passwords=req.body.passwords;
  var surname=req.body.surname;

  if (!username || !passwords) {
    return res.send({
      error: true,
      message: "Please input your Name and password",
    });
  } else {
    dbConnect.query(
      "UPDATE users SET surname=?,passwords=? WHERE username=?",
      [surname, passwords,username],
      (error, results, field) => {
        if (error) throw error;
        let message = "";
        if (results.changedRows == 0) {
          message = "User not found or dupicate data";
        } else {
          message = "Update User Successfully";
        }
        return res.send({ error: false, data: results, message: message });
      }
    );
  }
}

module.exports = { getUser, addUser, getUserbyId, deleteUser,updateUser };
