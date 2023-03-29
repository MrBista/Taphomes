const { decodeToken } = require('../helpers/jwt');
const { User } = require('../models');
const authentication = async (req, res, next) => {
  try {
    const { access_token } = req.headers;
    if (!access_token) {
      throw { name: 'bad token' };
    }
    const getPayload = decodeToken(access_token);
    const admin = await User.findByPk(getPayload.id);
    if (!admin) {
      throw { name: 'bad token' };
    }
    req.admin = admin;
    next();
  } catch (err) {
    if (err.name === 'bad token' || err.name === 'JsonWebTokenError') {
      res.status(401).json({ message: 'Invalid access token' });
    } else {
      res.status(500).json(err);
    }
  }
};
const authorization = async (req, res, next) => {
  try {
    if (req.admin.role?.toLowerCase() !== 'admin') {
      throw { name: 'forbidden' };
    }
    next();
  } catch (err) {
    res.status(500).json({ message: 'something went wrong' });
  }
};

module.exports = { authentication, authorization };
