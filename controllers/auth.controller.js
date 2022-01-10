const User = require('../models/auth.model');
const expressJwt = require('express-jwt');
const _ = require('lodash');
const { OAuth2Client } = require('google-auth-library');
const fetch = require('node-fetch');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
//Custom error handler to get useful error from database errors
const { errorHandler } = require('../helpers/dbErrorHandling');
//I will use for send email sendgrid you can use nodemailer
const sgMail = require('@sendgrid/mail');
exports.registerController = (req, res) => {
  const { name, email, password } = req.body;

  //Validation to req, body we will create custom validation in secconds
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const firstError = errors.array().map(error.msg)[0];
    return res.status(422).json({
      error: firstError,
    });
  } else {
    User.findOne({
      email,
    }).exec((err, user) => {
      //if user exists
      if (user) {
        return res.status(400).json({
          error: 'Email is taken',
        });
      }
    });
    //Generate Token
    const token = jwt.sign(
      {
        name,
        email,
        password,
      },
      process.env.JWT_ACCOUNT_ACTIVATION
    );
  }
};