const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Business Name is Required"],
  },
  details: String,
  img: String,
});
const businessSchema = new mongoose.Schema({
  businessName: {
    type: String,
    required: [true, "Business Name is Required"],
    unique: true,
  },
  category: {
    type: String,
    required: [true, "Category is Required"],
  },
  address: {
    type: String,
    required: [true, "Address is Required"],
  },
  description: String,
  rating: Number,
  businessImage: String,
  images: [String],
  owner: String,
  phone: String,
  email: String,
  website: String,
  products: [productSchema],
});

const businessModel = mongoose.model("Business", businessSchema);

module.exports = businessModel;
