import { combineReducers } from 'redux';
import repos from './repos';

const githubReduxApp = combineReducers({
  repos
});

export default githubReduxApp;
