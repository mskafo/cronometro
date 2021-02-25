var express = require('express');
var router = express.Router();

var nums = []

for(var i=0; i<=99; i++){
  if(i < 10){
    i = '0' + i.toString();
  }
  nums.push(i.toString());
}

//console.log(nums);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {nums: nums});
});

module.exports = router;
