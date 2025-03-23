const asyncHandler = require('express-async-handler');
const User = require('../models/user-model');

// @description: Registers a new user account.
// @method: POST
// @route: POST /api/v1/auth/register
// @returns: 201 - HTTP CREATED

module.exports.registerUser = asyncHandler(async (request, response, next) => {
   const {name, email, password} = request.body;

   if(!name || !email || !password) { // Check to see if the fields are provided.

   }

   const userExists = await User.findOne({email});

   return response.status(201).json({success: true, message: 'Register User Route'})
})

// @description: Logs the user into the NextStore Application
// @method: GET
// @route: /api/v1/auth/login
// @returns: 200 - HTTP OK

module.exports.loginUser = asyncHandler(async (request, response, next) => {
    const {emailAddress, password} = request.body;
})

// @description: The user can send a Forgot Password request to reset the passord
// @method: GET
// @route: /api/v1/auth/logout
// @returns: 200 - HTTP OK

module.exports.forgotPassword = async (request, response, next) => {
    const {email} = request.body;
}

// @description: Logs the user out from the application.
// @method: GET
// @route: /api/v1/auth/logout
// @returns: 200 - HTTP OK

module.exports.logout = async (request, response, next) => {

}

// @description: Resets the user's password after sending a Forgot password request
// @method: GET
// @route: /api/v1/auth/reset-password/:token
// @returns: 200 - HTTP OK

module.exports.resetPassword = async (request, response, next) => {

}