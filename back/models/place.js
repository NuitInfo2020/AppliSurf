const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const placeSchema = new Schema(
  {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    name: { type: String, required: true },
  },
  { timestamp: true }
);

const Place = mongoose.model("Place", placeSchema);
module.exports = Place;
