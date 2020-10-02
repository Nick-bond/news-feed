import { combineReducers } from 'redux';
import posts from './modules/posts';

const rootReducer = combineReducers({
  postList: posts.reducers.postList,
});

export default rootReducer;
