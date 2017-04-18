var express = require('express');
var router = express.Router();

var Especialista = require('../models/Mascota.js');

/* GET mascotas. */
router.get('/', function(req, res, next) {
  Especialista.find(function(err, post) {
    if(err) return next(err);
    res.json(post);
  });
});

/* POST mascotas. */
router.post('/', function(req, res, next) {
  Especialista.create(req.body, function(err, post) {
    if(err) {
      console.log(err);
      return next(err);
    }
    res.json(post);
  });
});

/* GET mascota /:id */
router.get('/:id', function(req, res, next) {
  Especialista.findById(req.params.id, function(err, post) {
    if(err) return next(err);
    res.json(post);
  });
});

/* PUT mascota /:id */
router.put('/:id', function(req, res, next) {
  Especialista.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
    if(err) return next(err);
    res.json(post);
  });
});

/* DELETE mascota /:id */
router.delete('/:id', function(req, res, next) {
  Especialista.findByIdAndRemove(req.params.id, req.body, function(err, post) {
    if(err) return next(err);
    res.json(post);
  });
});

module.exports = router;
