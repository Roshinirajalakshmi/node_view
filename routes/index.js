var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { name:'I. Roshini Rajalakshmi',
  email:'rose@gmail.com',
  contact:'5963096356',
  fathersName:'C. Ilayaindrakumar',dob:'22.10.2000',
  age:'22',
  bloodgroup:'B+ve'});
  });

module.exports = router;
