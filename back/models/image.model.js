/* eslint-disable linebreak-style */
require('dotenv').config();
const mongoose = require('mongoose');

const imageSchema = mongoose.Schema({
  name: String,
  avatar: String,
  cludinay_id: String,
  products: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },

});

module.exports = mongoose.model('Image', imageSchema);
