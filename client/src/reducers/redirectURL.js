import { SET_REDIRECT_URL } from '../actions';

const redirectURL = (state = '/', action) => {
  switch (action.type) {
    case SET_REDIRECT_URL:
      return action.url;
    default:
      return state;
  }
};

export default redirectURL;