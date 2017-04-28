const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const GeoSchema = new Schema({
  type:{
    type: String,
    default: "Point"
  },
  coordinates:{
    type:[Number],
    index: '2dsphere'
  }
});

// create ninja schema and model
const JobSchema = new Schema({
  name:{
    type: String,
    required: [true, 'Name Field is required'],
  },
  jobTitle:{
    type:String,
  },
  address:{
    type:String,
  },
  hourly:{
    type:String,
  },
  qualifications:{
    type:String,
  },


  //add in geo location

  geometry: GeoSchema
});

const Job = mongoose.model('job', JobSchema);
module.exports = Job;
