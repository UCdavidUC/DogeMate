var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'DogMate' });
});

/* GET start page */
router.get('/start', function(req, res, next) {
  res.render('access/start');
});

/* GET Specialist Home Page */
router.get('/dashboard', function(req, res, next) {
  res.render('internal/dashboard');
});

/* GET Error Page */
router.get('/error', function(req, res, next) {
  res.render('error');
})

module.exports = router;
