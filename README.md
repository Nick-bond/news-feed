# News Feed

### Demo
https://news-feed1.herokuapp.com/

#### For local development run 

`npm run dev`


##### NOTE
for local development need replace 
`app/src/constants` 
from 
```
  API_POSTS: '/api/posts',
  API_ADD: '/api/post/create',
  API_REMOVE: '/api/post/remove',
```

too 

```
  API_POSTS: 'http://localhost:5000/api/posts',
  API_ADD: 'http://localhost:5000/api/post/create',
  API_REMOVE: 'http://localhost:5000/api/post/remove',
```