const { comparePassword } = require('../helpers/bcryptjs');
const { signToken } = require('../helpers/jwt');
const { User } = require('../models');
class ControllerUser {
  static async createUser(req, res, next) {
    try {
      const { email, password, firstName, lastName } = req.body;
      await User.create({
        email,
        firstName,
        lastName,
        password,
      });
      res.status(201).json({ message: 'successfully create new user' });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: 'something went wrong' });
    }
  }
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      console.log(email, password);
      if (!email) {
        throw { name: 'bad email' };
      }
      console.log('masuk');
      if (!password) {
        throw { name: 'bad password' };
      }
      const admin = await User.findOne({
        where: {
          email,
        },
      });
      if (!admin) {
        throw { name: 'unAuth' };
      }
      const checkEmail = comparePassword(password, admin.password);
      if (!checkEmail) {
        throw { name: 'unAuth' };
      }
      const generateToken = signToken({
        id: admin.id,
        role: admin.role,
      });
      res.status(200).json({ access_token: generateToken, email, password });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: 'something went wrong' });
    }
  }
  static async getAllUser(req, res, next) {
    try {
      const users = await User.findAll();
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json({ message: 'something went wrong' });
    }
  }
  static async getUserById(req, res, next) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      if (!user) {
        throw { name: 'no user' };
      }
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json({ message: 'something went wrong' });
    }
  }
  static async getUserByJwt(req, res, next) {
    try {
      const users = await User.findAll();
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json({ message: 'something went wrong' });
    }
  }
  static async deleteUserById(req, res, next) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      if (!user) {
        throw { name: 'not found' };
      }
      await User.destroy({
        where: {
          id,
        },
      });
      res.status(200).json({ message: 'successfully delete user' });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: 'something went wrong' });
    }
  }
}

module.exports = ControllerUser;
