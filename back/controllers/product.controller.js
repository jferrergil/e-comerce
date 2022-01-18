/* eslint-disable no-underscore-dangle */
/* eslint-disable camelcase */
const Product = require('../models/product.model');
const Image = require('../models/image.model');

async function getAll(req, res) {
  const query = req.body;
  try {
    const products = await Product.find(query).populate({ path: 'picture_url', select: 'avatar' });
    res.json(products);
  } catch (err) {
    res.status(500);
    res.send(err);
  }
}
async function getOneProduct(req, res, next) {
  try {
    const oneProduct = await Product.findById(req.params.id).populate({ path: 'picture_url', select: 'avatar' });
    res.status(202).json(oneProduct);
  } catch (error) {
    next(error);
  }
}

async function addProduct(req, res, next) {
  const {
    brand,
    name,
    sizes_stock,
    description,
    picture_url,
    prize,
    visible,
    stock,
  } = req.body;

  try {
    const image = await Image.findById(picture_url);
    const shoes = {
      brand,
      name,
      sizes_stock,
      description,
      picture_url: image._id,
      prize,
      visible,
      stock,
    };
    const newShoe = await Product.create(shoes);

    image.product = newShoe._id;
    image.save();

    res.json(newShoe);
  } catch (error) {
    next(error);
  }
}

async function deleteProduct(req, res, next) {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(202).json({ deletedId: req.params.id });
  } catch (error) {
    next(error);
  }
}

async function updateProduct(req, res, next) {
  try {
    if (!req.params.id) {
      next(new Error('Invalid id'));
      return;
    }
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedProduct);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAll, addProduct, deleteProduct, updateProduct, getOneProduct,
};
