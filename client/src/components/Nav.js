import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Popover from 'material-ui/Popover';
import MenuItem from 'material-ui/MenuItem';
import { Tabs, Tab } from 'material-ui/Tabs';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { connect } from 'react-redux';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false, slideIndex: 0 };
    this.changeTab = this.changeTab.bind(this);
    this.clickHome = this.clickHome.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
  }

  componentWillMount() {
    if (location.pathname === '/today') {
      this.setState({
        slideIndex: 0,
      });
    } else if (location.pathname === '/history') {
      this.setState({
        slideIndex: 1,
      });
    } else {
      this.setState({
        slideIndex: -1,
      });
    }
  }

  changeTab(event) {
    this.setState({
      slideIndex: event,
    });
  }

  handleTouchTap(event) {
    event.preventDefault();
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  }

  handleRequestClose() {
    this.setState({
      open: false,
    });
  }

  clickHome() {
    this.setState({
      slideIndex: -1,
    });
  }

  render() {
    const styles = {
      default_tab: {
        color: '#6d6d6d',
      },
      active_tab: {
        color: '#fff',
      },
    };

    styles.tab = [];
    styles.tab[0] = styles.default_tab;
    styles.tab[1] = styles.default_tab;
    styles.tab[2] = styles.default_tab;
    styles.tab[this.state.slideIndex] = styles.active_tab;

    const rightButtons = (
      <div>
        <FlatButton label="Sign Up" containerElement={<Link to="/login" />} style={{ color: 'white' }} />
        <FlatButton label="Login" containerElement={<Link to="/login" />} style={{ color: 'white' }} />
      </div>
    );

    if (this.props.isAuthenticated) {
      return (
        <div>
          <AppBar
            title={<NavLink exact to="/" onClick={this.clickHome} >TaskTrack</NavLink>}
            showMenuIconButton={false}
            style={{ backgroundColor: 'black', fontFamily: 'Pacifico', position: 'fixed' }}
            iconElementRight={
              <IconButton>
                <MoreVertIcon
                  onClick={this.handleTouchTap}
                />
              </IconButton>
            }
            iconStyleRight={{ color: 'white' }}
          />
          <Popover
            open={this.state.open}
            anchorEl={this.state.anchorEl}
            anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
            targetOrigin={{ horizontal: 'left', vertical: 'top' }}
            onRequestClose={this.handleRequestClose}
          >
            <MenuItem primaryText="Logout" containerElement={<Link to="/logout" />} />
          </Popover>
          <div className="bump-bar" />
          <Tabs
            onChange={this.changeTab}
            value={this.state.slideIndex}
            style={{ position: 'fixed', width: '100%', zIndex: '20' }}
            inkBarStyle={{ background: 'rgb(255, 64, 129)' }}
            tabItemContainerStyle={{ background: 'black' }}
          >
            <Tab
              style={styles.tab[0]}
              value={0}
              label={'Today'}
              containerElement={<Link to="/today" />}
            />
            <Tab
              style={styles.tab[1]}
              value={1}
              label={'History'}
              containerElement={<Link to="/history" />}
            />
          </Tabs>
        </div>
      );
    }
    return (
      <div>
        <AppBar
          title={<NavLink exact to="/" >TaskTrack</NavLink>}
          showMenuIconButton={false}
          style={{ backgroundColor: 'black', fontFamily: 'Pacifico', position: 'fixed' }}
          iconElementRight={rightButtons}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Nav);
