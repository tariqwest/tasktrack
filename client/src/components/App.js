import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Login from './Login';
// import Logout from './Logout';
import PrivateRoute from './PrivateRoute';
import Nav from './Nav';
import Today from './Today';

import store from '../store';

injectTapEventPlugin();

const App = () => (
  <Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <Router>
        <div className="background">
          <Nav />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/today" component={Today} />
        </div>
      </Router>
    </MuiThemeProvider>
  </Provider>
);

export default App;