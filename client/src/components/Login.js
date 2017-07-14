import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Card } from 'material-ui/Card';

const styles = {
  pageContainer: {
    // left and right margins
    // top and bottom padding if necesarry around multiple cards
    marginTop: '12px',
    paddingLeft: '12px',
    paddingRight: '12px',
  },
  cardContainer: {
    // spacing between cards on a page
    marginTop: '6px',
    marginBottom: '6px',
  },
};

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
      <div />
    );
  }
}

const mapStateToProps = state => ({
  redirectURL: state.redirectURL,
  isAuthenticated: state.auth.isAuthenticated,
});

export default withRouter(connect(mapStateToProps)(Login));
