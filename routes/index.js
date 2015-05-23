var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

router.get('/json-employees', function (req, res, next) {
  res.json({ some: "object literal 4" });
});
