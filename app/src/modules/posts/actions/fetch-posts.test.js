import fetchPosts from './fetch-posts';
import actionTypes from '../constants/action-types';

describe('fetchPosts', () => {
  it('should return correct action', () => {
    expect(redirectToStore()).toEqual({
      type: actionTypes.FETCH_POSTS,
    });
  });
});
