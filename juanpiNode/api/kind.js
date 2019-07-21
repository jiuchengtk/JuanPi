var express = require('express');
var router = express.Router();
var sql = require('./../sql/index');
var kind = require('./../sql/kind');


router.get('/', function(req, res, next) {
  sql.find(kind, {}, {}).then(data => {
    console.log(data)
    res.send(data)
  })
})


router.get('/womenDress', function(req, res, next) {
  sql.find(kind, {}, {womenDress:1}).then(data => {
    console.log(data)
    res.send(data)
  })
})

module.exports = router;