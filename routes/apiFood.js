const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Food = require('../models/food');


// get list of ninjas from the db
router.get('/foods', function(req, res, next){
  Food.geoNear(
       {type: "Point", coordinates: [ parseFloat(req.query.lng), parseFloat(req.query.lat)]},
       {maxDistance: 4829, spherical: true}
   ).then(function(foods){
       res.send(foods);
   }).catch(next);
});



//add a mew ninja to db
router.post('/foods', function(req, res, next){
  Food.create(req.body).then(function(food){
    res.send(food);
  }).catch(next);
});



//update a ninja in db
router.put('/foods/:id', function(req, res, next){
  Food.findByIdAndUpdate({_id:req.params.id}, req.body).then(function(){
    Food.findOne({_id:req.params.id}).then(function(food){
        res.send(food);
    });
  });
});


// delete a ninja from the database
router.delete('/foods/:id', function(req, res, next){
  Food.findByIdAndRemove({_id:req.params.id}).then(function(food){
    res.send(food);
  });
});



module.exports = router;
