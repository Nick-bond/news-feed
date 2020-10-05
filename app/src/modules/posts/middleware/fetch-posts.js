import actionTypes from '../constants/action-types';
import actions from '../actions';
import constants from '../../../constants';

const { API_POSTS } = constants;

const headers = {
  'Content-Type': 'application/json'
};

const fetchPosts = (store) => (next) => (action) => {
  if (action.type === actionTypes.FETCH_POSTS) {

    fetch(API_POSTS, {method: "GET", body: null, headers: headers}).then((response) => {
      return response.json();
    }).then((data) => {
      store.dispatch(actions.setPosts(data || []));
    }).catch((err) => {
      console.error(err);
    });
  }
  next(action);
};

export default fetchPosts;
