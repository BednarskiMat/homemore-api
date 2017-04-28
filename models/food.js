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
const FoodSchema = new Schema({
  name:{
    type: String,
    required: [true, 'Name Field is required'],
  },
  foodType:{
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

const Food = mongoose.model('food', FoodSchema);
module.exports = Food;
