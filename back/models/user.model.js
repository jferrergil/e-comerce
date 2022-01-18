/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
require('dotenv').config();
const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  passwd: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  shoes: [{ type: Schema.Types.ObjectId, ref: 'Product', require: true }],
  cart: { type: Schema.Types.ObjectId, ref: 'Cart', require: true },
  isAdmin: { type: Boolean, default: false },
});

module.exports = mongoose.model('User', userSchema);
