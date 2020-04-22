var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  // The old command
  //res.render('index', { title: 'Express' });
  // The new test-friendly command

  res.render('index', { title: 'The Friendly Greeting Generator' });
 });

router.post('/', function(req, res, next) {
  let name = req.body.name;
  message = `What up ${name}?`;

  res.render('index', { title: 'The Friendly Greeting Generator', message: message });
});

 
module.exports = router;