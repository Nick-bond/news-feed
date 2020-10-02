import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducer';
import middleware from '../middleware';
import connector from './connector';

const store = createStore(reducer, connector, applyMiddleware(...middleware));

export default store;
