import setPosts from './set-posts';
import actionTypes from '../constants/action-types';

describe('setPosts', () => {
  it('should return correct action', () => {
    const data = ['uuid1'];

    expect(setPosts(data)).toEqual({
      type: actionTypes.SET_POST_TO_STORE,
      payload: {
        data,
      },
    });
  });
});

