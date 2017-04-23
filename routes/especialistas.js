var express = require('express');
var router = express.Router();

var Especialista = require('../models/Especialista.js');

/* GET especialistas. */
router.get('/', function(req, res, next) {
  Especialista.find(function(err, post) {
    if(err) return next(err);
    res.json(post);
  });
});

/* POST especialistas. */
router.post('/', function(req, res, next) {
  Especialista.create(req.body, function(err, post) {
    if(err) {
      console.log(err);
      return next(err);
    }
    res.json(post);
    res.render('/dashboard');
  });
});

/* GET especialista /:id */
router.get('/:id', function(req, res, next) {
  Especialista.findById(req.params.id, function(err, post) {
    if(err) return next(err);
    res.json(post);
  });
});

/* PUT especialista /:id */
router.put('/:id', function(req, res, next) {
  Especialista.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
    if(err) return next(err);
    res.json(post);
  });
});

/* DELETE especialista /:id */
router.delete('/:id', function(req, res, next) {
  Especialista.findByIdAndRemove(req.params.id, req.body, function(err, post) {
    if(err) return next(err);
    res.json(post);
  });
});

module.exports = router;
