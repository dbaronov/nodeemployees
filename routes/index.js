var express = require('express');
var router = express.Router();
var db;

router.use(function(req, res, next) {
    console.log('ok');
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = function (_db) {
    db = _db;
    return router;
}

router.get('/employees', function (req, res, next) {
      db.employees.find({}, function (err, docs) {
        res.json(docs);
    });
    //console.log(db);
    //res.json(22);
});