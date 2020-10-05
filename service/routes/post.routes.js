const { Router  } = require('express');
const Posts = require('../models/Posts');
const router = Router();

router.post('/post/create', async (req, res) => {
  const { title, text } = req.body;
  const uniqId = "id" + Math.random().toString(32).slice(2);
  const post = new Posts({title, text, id: uniqId});
  await post.save();

  const posts = await Posts.find({ });
  return res.status(200).json({message: 'Post was created', posts});
});

router.post('/post/remove', async (req, res) => {
  const { id } = req.body;
  const post = await Posts.find({ id: id});
  if(post) {
    await Posts.deleteOne({ id: id});
  }

  const posts = await Posts.find({ });
  return res.status(200).json({message: 'Post was removed', posts});
});

module.exports = router;
