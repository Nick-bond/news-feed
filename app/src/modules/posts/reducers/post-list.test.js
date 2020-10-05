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
      expect(postList(state, action)).toBe(state);
    });
  });

  describe(`when action is ${actionTypes.SET_POST_TO_STORE}`, () => {
    beforeEach(() => {
      state = [];

      action = {
        type: actionTypes.SET_POST_TO_STORE,
        payload: {
          data: [
            {
              title: 'Test',
              description: 'some text',
            }
          ]
        },
      };
    });

    it('should set post list', () => {
      expect(postList(state, action)).not.toBe(state);
      expect(postList(state, action)).toEqual(action.payload.data);
    });
  });

  describe(`when action is ${actionTypes.UPDATE_POST}`, () => {
    beforeEach(() => {
      state = [];

      action = {
        type: actionTypes.UPDATE_POST,
        payload: {
          data: [
            {
              title: 'Test',
              description: 'some text',
            }
          ]
        },
      };
    });

    it('should set post list', () => {
      expect(postList(state, action)).not.toBe(state);
      expect(postList(state, action)).toEqual(action.payload.data);
    });
  });
});
