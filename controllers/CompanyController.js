var express = require("express");
var dbConnect = require("../config/config");
const User = require("../models/UserModel");

///Retrieve all data
const retrieveCompany = async (req, res) => {
  dbConnect.query("SELECT * FROM companys", (error, results, field) => {
    if (error) throw error;
    let message = "";
    if (results === undefined || results.length == 0) {
      message = "User is Empty";
    } else {
      message = "Successfully retrive all companys";
    }
    return res.send({
      error: false,
      data: results,
      message: message,
    });
  });
};

///Insert data to database
const addCompany = (req, res) => {
  var company = req.body.company;
  if (!company) {
    return res.status(400).send({
      error: true,
      message: "Please input a company",
    });
  } else {
    dbConnect.query(
      "INSERT INTO companys (companyId,company) values (?,?)",
      ["", company],
      (error, results, field) => {
        if (error) throw error;
        return res.send({
          error: false,
          data: results,
          message: "Success commpany",
        });
      }
    );
  }
};

//Get data by id
const getCompanyById = (req, res) => {
  let id = req.params.id;
  dbConnect.query(
    "SELECT*FROM companys WHERE companyId=?",
    [id],
    (error, results, field) => {
      if (error) throw error;

      let message = "";
      if (results === undefined || results.length == 0) {
        message = "Company not found";
      } else {
        message = "Successfull get your data";
      }
      return res.send({
        error: false,
        data: results,
        message: message,
      });
    }
  );
};
///Edit your Company
const updateCompany = (req, res) => {
  var company = req.body.company;
  var companyId = req.body.companyId;

  if (!companyId || !company) {
    return res.send({
      error: true,
      message: "Please input your company id and Company name",
    });
  } else {
    dbConnect.query(
      "UPDATE companys SET company=? WHERE companyId=?",
      [company, companyId],
      (error, results, field) => {
        if (error) throw error;
        let message = "";
        if (results.changedRows == 0) {
          message = "Company not found or dupicate data";
        } else {
          message = "Update company Successfully";
        }
        return res.send({ error: false, data: results, message: message });
      }
    );
  }
};

///Delete Company
const deleteCompany = (req, res) => {
  let companyId = req.body.companyId;
  if (!companyId) {
    return res.send({ error: true, message: "Please rovide company id" });
  } else {
    dbConnect.query(
      "DELETE FROM companys WHERE companyId=?",
      [companyId],
      (error, results, field) => {
        if (error) throw error;
        let message = "";
        if (results.affectedRows == 0) {
          message = "Company not found or already deleted";
        } else {
          message = "Delete company Success";
        }
        return res.send({ error: false, data: results, message: message });
      }
    );
  }
};
module.exports = {
  retrieveCompany,
  addCompany,
  getCompanyById,
  updateCompany,
  deleteCompany,
};
