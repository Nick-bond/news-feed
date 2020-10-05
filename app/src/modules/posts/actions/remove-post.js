import actionTypes from '../constants/action-types';

const removePost = (id) => ({
  type: actionTypes.REMOVE_POST,
  payload: {
    id,
  },
});

export default removePost;
