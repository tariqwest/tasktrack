import React from 'react';
import { connect } from 'react-redux';
import { List } from 'material-ui/List';
import { Row, Col } from 'react-flexbox-grid';
import { Card } from 'material-ui/Card';
import FontIcon from 'material-ui/FontIcon';
import { grey500 } from 'material-ui/styles/colors';
import CircularProgress from 'material-ui/CircularProgress';
import Task from './Task';
import { getUserTasks } from '../actions';


const styles = {
  loadingSpinner: {
    textAlign: 'center',
    width: '100%',
  },
  nothingToDisplay: {
    textAlign: 'center',
    width: '100%',
    color: grey500,
  },
  nothingToDisplayIcon: {
    fontSize: '70px',
    color: grey500,
  },
};

class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { dispatch, userId } = this.props;
    dispatch(getUserTasks(userId));
  }

  render() {
    if (this.props.isFetching) {
      return (
        <div>
          <div className="bump-tab-bar" />
          <Row>
            <Col xs={12} sm={6} smOffset={3}>
              <div style={styles.loadingSpinner}>
                <CircularProgress />
              </div>
            </Col>
          </Row>
        </div>
      );
    } else if (this.props.tasks.length > 0) {
      return (
        <div>
          <Card>
            <List>
              {this.props.tasks.map(task =>
                (<Task task={task} key={task.id} />) // eslint-disable-line
              )}
            </List>
          </Card>
        </div>
      );
    }
    return (
      <div>
        <div className="bump-tab-bar" />
        <Row>
          <Col xs={12} sm={6} smOffset={3}>
            <div style={styles.nothingToDisplay}>
              <FontIcon style={styles.nothingToDisplayIcon} className="material-icons">person_pin</FontIcon>
              <h2>No tasks yet, create some!</h2>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tasks: state.task.tasks,
  userId: state.auth.userId,
  isFetching: state.task.isFetching,
});

export default connect(mapStateToProps)(TaskList);
