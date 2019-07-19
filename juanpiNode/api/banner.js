var express = require('express');
var router = express.Router();
var sql = require('./../sql/index');
var Banner = require('./../sql/banner');

router.get('/', function(req, res, next) {
  
  // sql.find(Banner, {}, {}).then((doc) => {
  //   console.log(doc);
  //   res.send(doc);
  // });
  // const banner1 = new Banner({
  //   id: 23588,
  //   pic: 'https://goods5.juancdn.com/jas/190712/9/2/5d283011b6f8ea6c60013d94_1080x418.jpg'
  // })
  // sql.insert(banner1);
  // sql.insert(Banner, banner1).then(() => {
  //   console.log(data)
  //   res.send(data)
  // })
  
  sql.find(Banner, {}, {pic:1}).then( data => {
    console.log(data)
    res.send(data)
  })

});

module.exports = router;