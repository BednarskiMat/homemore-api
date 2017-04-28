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
const ShelterSchema = new Schema({
  name:{
    type: String,
    required: [true, 'Name Field is required'],
  },
  contact:{
    type:String,
  },
  address:{
    type:String,
  },
  hours:{
    type:String,
  },


  //add in geo location

  geometry: GeoSchema
});

const Shelter = mongoose.model('shelter', ShelterSchema);
module.exports = Shelter;
