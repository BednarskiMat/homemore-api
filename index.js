const express = require('express');
const routes2 = require('./routes/apiShelter');
const routes3 = require('./routes/apiFood');
const routes4 = require('./routes/apiJob');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// set up express
const app = express();

//connect to mongo
mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise = global.Promise;

app.use(bodyParser.json())

app.use(express.static('public'));
app.use('/api', routes2);
app.use('/api', routes3);
app.use('/api', routes4);



//error handling middleware
app.use(function(err, req, res, next){
  //console.log(err);
  res.status(422).send({error: err.message});
});

//listen for requests
app.listen(process.env.port||3000, function(){
  console.log("Now listening for requests");
})
