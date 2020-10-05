const { Router  } = require('express');
const Posts = require('../models/Posts');
const router = Router();

const defaultData = [
  {
    title: 'ReactJS',
    text: 'React is a javascript library for render ui',
    id: 1
  },
  {
    title: 'AngularJS',
    text: 'AngularJS is a javascript MVC framework',
    id: 2
  },
  {
    title: 'BackboneJS',
    text: 'BackboneJS is a javascript MVC framework',
    id: 3
  },
];

router.get('/posts', async (req, res) => {
  const posts = await Posts.find({ });

  return res.status(200).json(defaultData);
});

module.exports = router;
