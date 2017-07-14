import { combineReducers } from 'redux';

import auth from './auth';
import redirectURL from './redirectURL';
import user from './user';

const rootReducer = combineReducers({
  auth,
  redirectURL,
  user,
});

export default rootReducer;
