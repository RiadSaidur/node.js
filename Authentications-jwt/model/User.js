const mongoose = require('mongoose');

const resgisterUser = mongoose.Schema({
  name: {
    type: String,
    min: 3,
    max: 30,
    required: true
  },
  email: {
    type: String,
    min: 10,
    max: 30,
    required: true
  },
  password: {
    type: String,
    min: 8,
    max: 1024,
    required: true
  }
});

module.exports = mongoose.model('Users', resgisterUser);