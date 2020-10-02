import actionTypes from '../constants/action-types';

const initData = [];

const postList = (state = initData, action) => {
  switch (action.type) {
    case actionTypes.SET_POST_TO_STORE: {
      return [
        action.payload.data,
      ];
    }
    default: {
      return state;
    }
  }
};

export default postList;
