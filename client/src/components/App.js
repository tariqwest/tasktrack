import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Login from './Login';
// import Logout from './Logout';
// import PrivateRoute from './PrivateRoute';
// import Nav from './Nav';
import Today from './Today';

import store from '../store';

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="background">
        <Route path="/login" component={Login} />
        <Route path="/" component={Today} />
      </div>
    </Router>
  </Provider>
);

export default App;