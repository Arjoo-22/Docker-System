/*const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

const Product = mongoose.model('product', ProductSchema);
module.exports = Product;*/

const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    quantity: Number,
    category: String,
    brand: String,
    description: String
});

module.exports = mongoose.model("Product", ProductSchema);
