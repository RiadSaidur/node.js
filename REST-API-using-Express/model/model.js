import { Schema, model } from 'mongoose';

const PostSchema =  new Schema({
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

const Post = model('Posts', PostSchema);

export default Post;