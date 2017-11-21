var express = require('express');
var router = express.Router();
var config = require('../../config');
/* GET users listing. */
router.get('/', function(req, res, next) {
    console.log(config.temp);
  res.send('respond with a resource');

});

module.exports = router;
