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

router.get('/manClothing', function(req, res, next) {
  sql.find(kind, {}, {manClothing:1}).then(data => {
    console.log(data)
    res.send(data)
  })
})

router.get('/motherBaby', function(req, res, next) {
  sql.find(kind, {}, {motherBaby:1}).then(data => {
    console.log(data)
    res.send(data)
  })
})


router.get('/shoes', function(req, res, next) {
  sql.find(kind, {}, {shoes:1}).then(data => {
    console.log(data)
    res.send(data)
  })
})

router.get('/luggage', function(req, res, next) {
  sql.find(kind, {}, {luggage:1}).then(data => {
    console.log(data)
    res.send(data)
  })
})


router.get('/department', function(req, res, next) {
  sql.find(kind, {}, {department:1}).then(data => {
    console.log(data)
    res.send(data)
  })
})


router.get('/appliance', function(req, res, next) {
  sql.find(kind, {}, {appliance:1}).then(data => {
    console.log(data)
    res.send(data)
  })
})


router.get('/underwear', function(req, res, next) {
  sql.find(kind, {}, {underwear:1}).then(data => {
    console.log(data)
    res.send(data)
  })
})


router.get('/beauty', function(req, res, next) {
  sql.find(kind, {}, {beauty:1}).then(data => {
    console.log(data)
    res.send(data)
  })
})


router.get('/movement', function(req, res, next) {
  sql.find(kind, {}, {movement:1}).then(data => {
    console.log(data)
    res.send(data)
  })
})


router.get('/delicacy', function(req, res, next) {
  sql.find(kind, {}, {delicacy:1}).then(data => {
    console.log(data)
    res.send(data)
  })
})


router.get('/entertainmen', function(req, res, next) {
  sql.find(kind, {}, {entertainmen:1}).then(data => {
    console.log(data)
    res.send(data)
  })
})


router.get('/tourism', function(req, res, next) {
  sql.find(kind, {}, {tourism:1}).then(data => {
    console.log(data)
    res.send(data)
  })
})

module.exports = router;