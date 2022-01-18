const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  brand: String,
  name: String,
  sizes_stock: Array,
  description: String,
  picture_url: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Image',
  },
  prize: Number,
  visible: Boolean,
  stock: Number,
});

module.exports = mongoose.model('Product', productSchema);
