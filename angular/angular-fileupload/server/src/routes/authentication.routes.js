//
// Authentication routes
//
'use strict';

const routes = require('express').Router();
const AuthController = require('../controllers/authentication.controller')
const { check } = require('express-validator/check');

routes.post(
	'/login', 
	[
		check('email').isEmail(),
		check('password').isLength({ min: 5 })
	], 
	AuthController.login
)

routes.post(
	'/register', 
	[
		check('username').isEmail(),
		check('password').isLength({ min: 5 })
	], 
	AuthController.register
)

module.exports = routes