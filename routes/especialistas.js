var express = require('express');
var router = express.Router();

var Especialista = require('../models/Especialista.js');

/* GET especialistas.
*  Devuelve una lista de todos los especialistas.
*  Estos son los callback function, aqui pones que es lo que quieres pedir en la URL
*  y que es lo que quieres que te devuelva. 
*/
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
    // Send manda a la vista algo en formato json,
    //res.send(post);
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
