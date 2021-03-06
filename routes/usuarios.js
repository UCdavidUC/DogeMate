var express = require('express');
var router = express.Router();

var Especialista = require('../models/Usuario.js');

/* GET usuarios. */
router.get('/', function(req, res, next) {
  Especialista.find(function(err, post) {
    if(err) return next(err);
    res.json(post);
  });
});

/* POST usuarios. */
router.post('/', function(req, res, next) {
  Especialista.create(req.body, function(err, post) {
    if(err) {
      console.log(err);
      return next(err);
    }
    res.json(post);
  });
});

/* GET usuario /:id */
router.get('/:id', function(req, res, next) {
  Especialista.findById(req.params.id, function(err, post) {
    if(err) return next(err);
    res.json(post);
  });
});

/* PUT usuario /:id */
router.put('/:id', function(req, res, next) {
  Especialista.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
    if(err) return next(err);
    res.json(post);
  });
});

/* DELETE usuario /:id */
router.delete('/:id', function(req, res, next) {
  Especialista.findByIdAndRemove(req.params.id, req.body, function(err, post) {
    if(err) return next(err);
    res.json(post);
  });
});

module.exports = router;
