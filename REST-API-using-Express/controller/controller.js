import { Router } from 'express';
const router = Router();

import Post, { find, findById, findByIdAndUpdate, findByIdAndDelete } from '../model/model';

router.get('/data', async (req, res) => {
  try {
    const posts = await find();
    res.send(posts);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/data/:id', async (req, res) => {
  try {
    const post = await findById(req.params.id);
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
    const post = await findByIdAndUpdate(req.params.id, req.body);
    res.send(post);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete('/remove/:id', async (req, res) => {
  try {
    const post = await findByIdAndDelete(req.params.id);
    res.send(post);
  } catch (error) {
    res.status(400).send(error);
  }
});

export default router;