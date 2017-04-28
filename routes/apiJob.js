const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Job = require('../models/job');


// get list of ninjas from the db
router.get('/jobs', function(req, res, next){
  Job.geoNear(
       {type: "Point", coordinates: [ parseFloat(req.query.lng), parseFloat(req.query.lat)]},
       {maxDistance: 4829, spherical: true}
   ).then(function(jobs){
       res.send(jobs);
   }).catch(next);
});



//add a mew ninja to db
router.post('/jobs', function(req, res, next){
  Job.create(req.body).then(function(job){
    res.send(job);
  }).catch(next);
});



//update a ninja in db
router.put('/jobs/:id', function(req, res, next){
  Job.findByIdAndUpdate({_id:req.params.id}, req.body).then(function(){
    Job.findOne({_id:req.params.id}).then(function(job){
        res.send(job);
    });
  });
});


// delete a ninja from the database
router.delete('/jobs/:id', function(req, res, next){
  Job.findByIdAndRemove({_id:req.params.id}).then(function(job){
    res.send(job);
  });
});



module.exports = router;
