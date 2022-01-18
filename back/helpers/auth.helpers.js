/* eslint-disable no-underscore-dangle */
/* eslint-disable no-return-await */
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

async function checkPasswd(passwd, user) {
  if (!user.passwd) {
    return false;
  }
  return await bcrypt.compare(passwd, user.passwd);
}

function createJWT(user) {
  const tokenPayload = {
    name: user.name,
    id: user._id,
    cart: user.cart,
  };

  const secret = process.env.SECRET;
  return jwt.sign(tokenPayload, secret);
}

module.exports = { checkPasswd, createJWT };
