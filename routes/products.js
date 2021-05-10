var express = require('express');
var mysql = require("mysql");
var utility = require("../public/javascripts/utility");
var router = express.Router();


router.get('/', function(req, res, next) {
    utility.test();
    var connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"YES",
    port:"3306",
    database:"app"
  });
  connection.connect(function(err){
    if(err){
        throw err;
    }
  });
  connection.query("select * from product_l1", function(err, d){
    if(err){
      throw err;
    }
    //console.log(JSON.stringify(d));
  });
  
});

module.exports = router;
