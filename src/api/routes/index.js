var express = require('express');
var router = express.Router();
var config = require('../../config');

/* GET home page. */
if(config.target.toLowerCase() === 'production')
  router.get('/', express.static('../../../dist'));
else
  router.get('/', function(req, res){
    config.temp = true;
    res.json({ok: 'ok'});
  });

module.exports = router;
