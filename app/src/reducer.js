import { combineReducers } from 'redux';
import posts from './modules/posts';
import dialogs from "./modules/dialogs";

const rootReducer = () =>
  combineReducers({
    postList: posts.reducers.postList,
    activeDialog: dialogs.reducers.activeDialog,
  });

export default rootReducer;