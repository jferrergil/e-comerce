const { model, Schema } = require('mongoose');

const cartSchema = Schema({
  products: [{
    product: { type: Schema.Types.ObjectId, ref: 'Product', require: true },
    amount: { type: Number, require: true },

  }],
  user: { type: Schema.Types.ObjectId, ref: 'User', require: true },
});
module.exports = model('Cart', cartSchema);
