import posts from './modules/posts';

export default [
  posts.middleware.fetchPosts,
  posts.middleware.updatePosts,
];
