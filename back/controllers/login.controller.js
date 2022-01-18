/* eslint-disable consistent-return */
/* eslint-disable no-else-return */
/* eslint-disable no-useless-return */
const auth = require('../helpers/auth.helpers');
const User = require('../models/user.model');

async function logUser(req, res) {
  const { email, passwd } = req.body;
  let user;
  try {
    user = await User.findOne({ email }).populate({ path: 'cart', select: 'product' });
  } catch (err) {
    res.status(500).json(err);
  }
  if (user && (await auth.checkPasswd(passwd, user))) {
    const jwToken = auth.createJWT(user);
    res.json({
      user,
      token: jwToken,
    });
    return jwToken;
  } else {
    res.status(401).json({ message: 'Invalid user or passwd' });
    return;
  }
}

module.exports = { logUser };
