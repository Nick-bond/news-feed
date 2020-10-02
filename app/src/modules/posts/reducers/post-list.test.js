import actionTypes from '../constants/action-types';
import postList from './post-list';

describe('postList', () => {
  let state;
  let action;

  describe('when action does not match', () => {
    beforeEach(() => {
      state = [];
      action = {
        type: 'NOT_SUCH_ACTION_TYPE',
      };
    });

    it('should return previous state', () => {
      expect(notifications(state, action)).toBe(state);
    });
  });

  describe(`when action is ${actionTypes.SET_POST_TO_STORE}`, () => {
    beforeEach(() => {
      state = [];

      action = {
        type: actionTypes.SET_POST_TO_STORE,
        payload: {
          title: 'Test',
          description: 'something',
        },
      };
    });

    it('should set post list', () => {
      expect(postList(state, action)).not.toBe(state);
      expect(postList(state, action)).toEqual(action.payload.data);
    });
  });
});
