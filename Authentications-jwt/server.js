const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const user = require('./controller/user');

require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use('/user', user);

const mongoOptions = {
  useUnifiedTopology: true,
  useNewUrlParser: true
}

mongoose.connect(process.env.MONGODB_URI, mongoOptions, () => console.log('Connected to DB'));

app.listen(PORT, () => console.log('Now Listening'));