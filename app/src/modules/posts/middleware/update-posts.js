import actionTypes from '../constants/action-types';
import actions from '../actions';
import constants from '../../../constants';

const { API_REMOVE, API_ADD } = constants;

const headers = {
  'Content-Type': 'application/json'
};

const updatePosts = (store) => (next) => (action) => {
  switch (action.type) {
    case actionTypes.ADD_POST: {
      fetch(API_ADD, {method: "POST", body: JSON.stringify(action.payload), headers: headers}).then((response) => {
        return response.json();
      }).then((data) => {
        const { posts } = data;
        store.dispatch(actions.updatePosts(posts || []));
      }).catch((err) => {
        console.error(err);
      });

      next(action);
      break;
    }
    case actionTypes.REMOVE_POST: {
      fetch(API_REMOVE, {method: "POST", body: JSON.stringify(action.payload), headers: headers}).then((response) => {
        return response.json();
      }).then((data) => {
        const { posts } = data;
        store.dispatch(actions.updatePosts(posts || []));
        window.location = "/";
      }).catch((err) => {
        console.error(err);
      });

      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default updatePosts;
