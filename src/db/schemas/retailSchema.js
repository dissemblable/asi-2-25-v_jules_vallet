import { Schema } from "mongoose";

const restaurantSchema = new Schema({
  cuisineType: {
    type: String,
    },
  stars: {
    type: Number,
  },
  averagePrice: {
    type: Number,
  }
});

const museeSchema = new Schema({
  artMovement: {
    type: String,
  },
  artType: {
    type: String,
  },
  entryFee: {
    type: String,
  },
  price:{
    type: Number,
  }
});
  
const barSchema = new Schema({
  barType: {
    type: String,
  },
  averagePrice: {
    type: Number,
  }
});
  
const parcSchema = new Schema({
  parkType: {
    type: String,
  },
  publicPrivate: {
    type: String,
  },
  entryFee: {
    type: String,
  },
  price:{
    type: Number,
  }
});

export const retailschema = new Schema({
  type: { type: String},
  restaurant: restaurantSchema,
  musee: museeSchema,
  bar: barSchema,
  parc: parcSchema,
  name: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  postalCode: { type: String, required: true },
  country: { type: String, required: true },
});