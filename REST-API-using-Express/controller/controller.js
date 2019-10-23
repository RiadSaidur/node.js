const express = require('express');
const router = express.Router();

const Post = require('../model/model');

router.get('/data', async (req, res) => {
  try {
    const posts = await Post.find();
    res.send(posts);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/data/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.send(post);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post('/data', async (req, res) => {
  const post = new Post(
    {
      title: req.body.title,
      post: req.body.post,
    });
  try {
    const data = await post.save();
    res.send(data);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.patch('/patch/:id', async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body);
    res.send(post);
  } catch (error) {
    res.status(400).send(error);
  }
});

// needs testing
router.delete('/remove/:id', async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    res.send(post);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;