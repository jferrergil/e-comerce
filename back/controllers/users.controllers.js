/* eslint-disable no-underscore-dangle */
const bcrypt = require('bcryptjs');
const User = require('../models/user.model');
const Cart = require('../models/cart.model');

async function getAllUsers(req, res, next) {
  try {
    const result = await User.find({});
    res.send(result);
  } catch (error) {
    next(error);
  }
}

async function addUser(req, res, next) {
  const user = req.body;

  if (!user.name || !user.passwd) {
    next(new Error());
    return;
  }

  const salt = bcrypt.genSaltSync(10);
  user.passwd = bcrypt.hashSync(user.passwd, salt);
  const newUser = await User.create(user);
  const newCart = {
    products: [],
    user: newUser._id,
  };
  const userCart = await Cart.create(newCart);

  newUser.cart = userCart._id;
  await newUser.save();
  res.json(newUser);
}

function getUserById(req, res, next) {
  if (!req.params.id) {
    next(new Error('Invalid id'));
    return;
  }
  try {
    const result = User.findById(req.params.id);
    res.json(result);
  } catch (error) {
    next(error);
  }
}

function updateUser(req, res, next) {
  if (!req.params.id) {
    next(new Error('Invalid id'));
    return;
  }
  try {
    const updatedUser = User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedUser);
  } catch (error) {
    next(error);
  }
}

async function deleteUser(req, res, next) {
  try {
    await User.findByIdAndDelete(req.params.id);
    await Cart.deleteMany({ user: req.params.id });
    res.status(202).json({ deletedId: req.params.id });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAllUsers,
  addUser,
  getUserById,
  updateUser,
  deleteUser,
};
