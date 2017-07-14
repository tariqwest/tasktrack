import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import { logout } from '../actions';

class Logout extends Component {
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(logout());
  }

  render() {
    return <Redirect to={'/'} />;
  }

}

export default connect()(Logout);
