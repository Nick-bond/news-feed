import actionTypes from '../constants/action-types';

const setPosts = (data) => ({
  type: actionTypes.SET_POST_TO_STORE,
  payload: {
    data,
  },
});

export default setPosts;
