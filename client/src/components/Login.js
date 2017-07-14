import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class Login extends React.Component {
  componentDidMount() {
    this.checkAuth();
  }

  componentDidUpdate() {
    this.checkAuth();
  }

  checkAuth() {
    const { isAuthenticated, history, redirectURL } = this.props;
    if (isAuthenticated) { history.push(redirectURL); }
  }

  render() {
    const { redirectURL } = this.props;

    return (
      <div>
        <a href={`/auth/facebook/?returnTo=${redirectURL}`}> Facebook Login </a>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  redirectURL: state.redirectURL,
  isAuthenticated: state.auth.isAuthenticated,
});

export default withRouter(connect(mapStateToProps)(Login));
