import actionTypes from '../constants/action-types';

const updatePosts = (data) => ({
  type: actionTypes.SET_POST_TO_STORE,
  payload: {
    data,
  },
});

export default updatePosts;
