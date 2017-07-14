import { combineReducers } from 'redux';

import auth from './auth';
import redirectURL from './redirectURL';

const rootReducer = combineReducers({
  auth,
  redirectURL,
});

export default rootReducer;
