const express = require('express');
const ControllerUser = require('../controllers/userController');
const { authentication, authorization } = require('../middleware/auth');
const routes = express.Router();

routes.post('/api/users', ControllerUser.createUser);
routes.post('/api/login', ControllerUser.login);
routes.get('/api/users', ControllerUser.getAllUser);
routes.use(authentication);
routes.get('/api/users/current', ControllerUser.getUserByJwt);
routes.get('/api/users/:id', ControllerUser.getUserById);
routes.delete('/api/users/:id', authorization, ControllerUser.deleteUserById);
module.exports = routes;
