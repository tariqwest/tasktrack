import { combineReducers } from 'redux';

import auth from './auth';
import redirectURL from './redirectURL';
import user from './user';
import task from './task';

const rootReducer = combineReducers({
  auth,
  redirectURL,
  user,
  task,
});

export default rootReducer;
