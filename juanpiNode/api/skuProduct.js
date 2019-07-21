var express =  require('express');
var router = express.Router();
var sql = require('./../sql/index');
var skuProduct = require('./../sql/skuProduct');

router.get('/', function(req, res, next) {
  sql.find(skuProduct, {}, {}).then(data => {
    console.log(data)
    res.send(data)
  })
})

router.get('/banner', function(req, res, next) {
  sql.find(skuProduct, {}, {img1:1, img2:1, img3:1, img4:1, img5:1}).then(data => {
    console.log(data)
    res.send(data)
  })
})


router.get('/banner/details', function(req, res, next) {
  let { id } = req.query
  console.log(id)
  sql.find(skuProduct, {goods_id: id}, {img1:1, img2:1, img3:1, img4:1, img5:1}).then(data => {
    console.log(data)
    res.send(data)
  })
})

module.exports = router;