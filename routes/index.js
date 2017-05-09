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
/* GET Specialist oficial intperfil */
router.get('/intperfil', function(req, res, next) {
  res.render('internal/intperfil');
});

/* GET Specialist oficial ID */
router.get('/ioficial', function(req, res, next) {
  res.render('internal/registro/ioficial');
});

/* GET Specialist oficial bolsas */
router.get('/bolsas', function(req, res, next) {
  res.render('internal/registro/bolsas');
});

/* GET Specialist oficial collares */
router.get('/collares', function(req, res, next) {
  res.render('internal/registro/collares');
});

/* GET Specialist oficial correas */
router.get('/correas', function(req, res, next) {
  res.render('internal/registro/correas');
});

/* GET Specialist oficial examen1 */
router.get('/examen1', function(req, res, next) {
  res.render('internal/registro/examen1');
});

/* GET Specialist oficial examen2 */
router.get('/examen2', function(req, res, next) {
  res.render('internal/registro/examen2');
});

/* GET Specialist oficial termycon */
router.get('/termycon', function(req, res, next) {
  res.render('internal/registro/termycon');
});

/* GET Specialist oficial termycon */
router.get('/fin', function(req, res, next) {
  res.render('internal/registro/fin');
});

/* GET Specialist oficial antecedentes */
router.get('/antecedentes', function(req, res, next) {
  res.render('internal/registro/antecedentes');
});

/* GET Specialist oficial intperfil */
router.get('/intperfil', function(req, res, next) {
  res.render('internal/intperfil');
});

/* GET Error Page */
router.get('/error', function(req, res, next) {
  res.render('error');
})

module.exports = router;
