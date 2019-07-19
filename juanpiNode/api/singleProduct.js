var express = require('express');
var router = express.Router();
var sql = require('./../sql/index');
var SingleProduct = require('./../sql/singleProduct');

router.get('/', function(req, res, next) {
  sql.find(SingleProduct, {}, {}).then( data => {
    console.log(data)
    res.send(data)
  })
});

module.exports = router