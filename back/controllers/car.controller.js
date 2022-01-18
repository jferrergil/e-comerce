/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-await-in-loop */
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const Cart = require('../models/cart.model');
const { getAll } = require('./product.controller');
const Product = require('../models/product.model');

dotenv.config();

async function getCartById(req, res) {
  const { authorization } = req.headers;
  let token = '';
  let codeToken = null;

  try {
    if (authorization && authorization.toLowerCase().startsWith('bearer')) {
      token = authorization.substring(7);
      codeToken = jwt.verify(token, process.env.SECRET);
    } else {
      throw (new Error());
    }
  } catch (err) {
    res.status(401).json({
      err: 'Token missing or invalid',
    });
    return;
  }
  const cartItems = await Cart.findById(codeToken.cart).populate({
    path: 'products.product',
    select: ['brand', 'name', 'picture_url', 'prize'],
    populate: {
      path: 'picture_url',
    },
  });
  res.json({ cartItems, codeToken });
}

async function makeBuyOperation(req, res) {
  const authorization = req.get('Authorization');
  let token = '';
  let codeToken = null;

  try {
    if (authorization && authorization.toLowerCase().startsWith('bearer')) {
      token = authorization.substring(7);
      codeToken = jwt.verify(token, process.env.SECRET);
      res.status(200).json(codeToken);
    } else {
      throw (new Error());
    }
  } catch (err) {
    res.status(401).json({
      err: 'Token missing or invalid',
    });
    return;
  }
  const userCart = Cart.create();
  for (let i = 0; i < req.body.items.length; i += 1) {
    const item = req.body.items[i];
    const stockAvailable = await Product.findOneAndUpdate(
      {
        _id: item.product,
        stock: { $get: item.amount },
      },
      {
        $inc: { stock: -item.amount },
      },
    );
    if (stockAvailable) {
      userCart.product.push(item);
      await userCart.save();
    }
  }
  getAll(req, res);
}

async function addProductShopCart(req, res) {
  const authorization = req.get('Authorization');

  let token = '';
  let decodeToken = null;
  try {
    if (authorization && authorization.toLowerCase().startsWith('bearer')) {
      token = authorization.substring(7);
      decodeToken = jwt.verify(token, process.env.SECRET);
    }
  } catch (error) {
    res.status(401).json({
      error: 'token missing or invalid',
    });
    return;
  }

  const { product } = req.body;

  const shoes = await Product.findById(product._id);
  const cart = await Cart.findById(decodeToken.cart);

  const exShoes = cart.products
    .some((e) => JSON.stringify(e.product) === JSON.stringify(shoes._id));
  if (exShoes) {
    cart.products.forEach((e) => {
      if (JSON.stringify(e.product) === JSON.stringify(shoes._id)) {
        e.amount += 1;
      }
    });
  } else {
    cart.products = [
      ...cart.products,
      { product: shoes._id, amount: 1 },

    ];
  }

  cart.save();
  shoes.stock -= 1;
  shoes.save();
  res.json(cart);
}

async function deleteOneProductById(req, res) {
  const authorization = req.get('Authorization');
  let token = '';
  let decodeToken = null;

  try {
    if (authorization && authorization.toLowerCase().startsWith('bearer')) {
      token = authorization.substring(7);
      decodeToken = jwt.verify(token, process.env.SECRET);
    }
  } catch (error) {
    res.status(401).json({
      error: 'token missing or invalid',
    });
    return;
  }
  const cart = await Cart.findById(decodeToken.cart);
  const shoes = await Product.findById(req.params.id);

  cart.products.forEach((e) => {
    if (JSON.stringify(e.product) === JSON.stringify(shoes._id)) {
      if (e.amount === 1) {
        cart.products = cart.products.filter(
          (element) => JSON.stringify(element.product) !== JSON.stringify(shoes._id),
        );
      } else {
        e.amount -= 1;
      }
    }
  });
  await cart.save();

  shoes.stock += 1;
  await shoes.save();

  const finalCart = await Cart.findById(decodeToken.cart).populate({
    path: 'products.product',
    select: ['brand', 'name', 'picture_url', 'prize'],
    populate: {
      path: 'picture_url',
    },
  });

  res.json(finalCart);
}

async function updateOneProductById(req, res) {
  const authorization = req.get('Authorization');
  let token = '';
  let decodeToken = null;

  try {
    if (authorization && authorization.toLowerCase().startsWith('bearer')) {
      token = authorization.substring(7);
      decodeToken = jwt.verify(token, process.env.SECRET);
    }
  } catch (error) {
    res.status(401).json({
      error: 'token missing or invalid',
    });
    return;
  }

  const cart = await Cart.findById(decodeToken.cart);
  const shoes = await Product.findById(req.params.id);

  cart.products.forEach((e) => {
    if (JSON.stringify(e.product) === JSON.stringify(shoes._id)) {
      if (e.amount === 1) {
        cart.products = cart.products.filter(
          (element) => JSON.stringify(element.product) !== JSON.stringify(shoes._id),
        );
      } else {
        e.amount -= 1;
      }
    }
  });
  cart.save();

  shoes.stock += 1;
  shoes.save();

  res.json(cart);
}

async function updateOneById(req, res) {
  try {
    const updateProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },

      { new: true },

    );
    res.status(200).json(updateProduct);
  } catch (err) {
    res.status(500).json(err);
  }
}

module.exports = {
  getCartById,
  addProductShopCart,
  makeBuyOperation,
  updateOneById,
  updateOneProductById,
  deleteOneProductById,
};
