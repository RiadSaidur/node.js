const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { resgistrationValidation, loginValidation } = require('../authentication/auth');

const Users = require('../model/User');

require('dotenv').config();

router.post('/login', async (req, res) => {

  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const userExists = await Users.findOne({email: req.body.email});
  if(!userExists) return res.status(400).send('Email or Password is invalid');

  const validPass = await bcrypt.compare(req.body.password, userExists.password);
  if(!validPass) return res.status(400).send('Email or Password is invalid');

  const token = jwt.sign({_id: userExists._id}, process.env.JWT_TOKEN);
  res.header('auth-token', token).status(200).send("Check Header for 'auth-token'");

});

router.post('/resgister', async (req, res) => {

  const { error } = resgistrationValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const emailExists = await Users.findOne({email: req.body.email});
  if(emailExists) return res.status(400).send('Email Already Exists');

  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(req.body.password, salt);

  try{
    const user = new Users({
      name: req.body.name,
      email: req.body.email,
      password: hashedPass
    });
    const data = await user.save();
    res.status(200).send({_id: data._id});
  }catch(err){
    res.send(err);
  };

});

module.exports = router;