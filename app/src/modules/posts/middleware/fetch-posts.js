import actionTypes from '../constants/action-types';
import actions from '../actions';

const fetchPosts = (store) => (next) => (action) => {
  if (action.type === actionTypes.FETCH_POSTS) {

    store.dispatch(actions.setPosts([]));
  }
  next(action);
};

export default fetchPosts;
