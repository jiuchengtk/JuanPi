var express = require('express');
var router = express.Router();
var sql = require('./../sql/index');
var User = require('./../sql/user');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });


router.get('/', function(req, res, next) {
  sql.find(User, {}, {}).then((doc) => {
    console.log(doc);
    res.send(doc);
  });
});

module.exports = router;
