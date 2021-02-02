var Joi = require('joi');

module.exports = {
  body: {
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    client_id: Joi.string().required(),
    client_secret: Joi.string().required()
  }
}