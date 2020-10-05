import actionTypes from '../constants/action-types';

const addPost = (data) => ({
  type: actionTypes.ADD_POST,
  payload: {
    ...data,
  },
});

export default addPost;
