const mongoose = require('mongoose');

const PostSchema =  new mongoose.Schema({
  title: {
    type: String,
    min: 3,
    max: 20,
    required: true
  },
  post: {
    type: String,
    min: 3,
    max: 255,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Post = mongoose.model('Posts', PostSchema);

module.exports = Post;