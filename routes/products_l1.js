var express = require('express');
var utility = require("../public/javascripts/utility");
var router = express.Router();

router.get('/', function(req, res, next) {
  var connection = utility.createConnection("localhost", "root", "YES", "3306", "app");
  utility.connect(connection);
  connection.query("select * from product_l1", function(err, d){
    if(err){
      throw err;
    }
    res.send(d);
  });
  
});

module.exports = router;
