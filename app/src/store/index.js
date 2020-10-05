import { createStore, applyMiddleware } from 'redux';

import rootReducer from '../reducer';
import middleware from '../middleware';
import connectedStore from './connected-store';
import history from '../browser-history';

const store = createStore(
  rootReducer(history),
  applyMiddleware(...middleware)
);

connectedStore.set(store);

export default store;
