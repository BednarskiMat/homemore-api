const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Shelter = require('../models/shelter');


// get list of ninjas from the db
router.get('/shelters', function(req, res, next){
  Shelter.geoNear(
       {type: "Point", coordinates: [ parseFloat(req.query.lng), parseFloat(req.query.lat)]},
       {maxDistance: 4829, spherical: true}
   ).then(function(shelters){
       res.send(shelters);
   }).catch(next);
});



//add a mew ninja to db
router.post('/shelters', function(req, res, next){
  Shelter.create(req.body).then(function(shelter){
    res.send(shelter);
  }).catch(next);
});



//update a ninja in db
router.put('/shelters/:id', function(req, res, next){
  Shelter.findByIdAndUpdate({_id:req.params.id}, req.body).then(function(){
    Shelter.findOne({_id:req.params.id}).then(function(shelter){
        res.send(shelter);
    });
  });
});


// delete a ninja from the database
router.delete('/shelters/:id', function(req, res, next){
  Shelter.findByIdAndRemove({_id:req.params.id}).then(function(shelter){
    res.send(shelter);
  });
});



module.exports = router;
