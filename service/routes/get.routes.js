const { Router  } = require('express');
const Posts = require('../models/Posts');
const router = Router();

router.get('/posts', async (req, res) => {
  const posts = await Posts.find({ });

  return res.status(200).json(posts || []);
});

module.exports = router;
