const Joi = require('@hapi/joi');

const resgistrationSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string().min(10).max(30).required().email(),
  password: Joi.string().min(8).max(1024).required(),
  repeat_password: Joi.ref('password')
});

const loginSchema = Joi.object({
  email: Joi.string().min(10).max(30).required().email(),
  password: Joi.string().min(8).max(1024).required()
});

const resgistrationValidation = data => {
  return resgistrationSchema.validate(data);
}

const loginValidation = data => {
  return loginSchema.validate(data);
}

module.exports = { resgistrationValidation, loginValidation };