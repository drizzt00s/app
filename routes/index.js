var express = require('express');
// var mysql = require("mysql");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  // var connection = mysql.createConnection({
  //   host:"localhost",
  //   user:"root",
  //   password:"YES",
  //   port:"3306",
  //   database:"app"
  // });
  // connection.connect(function(err){
  //   if(err){
  //     console.log(err);
  //     return;
  //   }
  //   console.log("connection ok");
  // });
  // connection.query("select * from test", function(err, d){
  //   if(err){
  //     throw err;
  //   }
  //   console.log(JSON.stringify(d));
  // });
  

  

  res.render('index', { title: 'Express' });
});

module.exports = router;
