var express = require('express');
var router = express.Router();
var path = require('path');
var URL = require('url');


router.get('/', function(req, res, next) {
  var data = URL.parse(req.url, true).query;
  var funData = JSON.parse(data.data);
  var jsClass = funData.mod;
  var fun = funData.do;


  res.writeHead(200, {"content-type": "text/json"}); 

  var funJs = require('../module/'+jsClass);
  funJs[fun](funData,(redata)=>{
    res.write(redata);
  },this)
  res.end();

   //res.render('api', { title: 'yes can' });
});

module.exports = router;