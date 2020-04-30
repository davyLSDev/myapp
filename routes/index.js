var express = require('express');
var router = express.Router();
response =''

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'The Friendly Greeting Generator' });
});

/* POST name */
router.post('/', function(req, res, next) {
  preTrimLength = req.body.name.length;
  let trimName = req.body.name.trim();
  let response = `What up, ${trimName}?`;
  
  
  
  if (trimName.length == 0) {
    response = 'Whatevs...';
    if (preTrimLength) {
      response = 'Please don\'t waste my time';
    }  
  } 
  
  res.render('index', { title: 'The Friendly Greeting Generator' , response: response });
})

module.exports = router;